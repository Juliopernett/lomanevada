// Worker de Cloudflare: sirve el sitio estático (carpeta dist) y el contador de visitas.
// Solo las rutas /api/* pasan por aquí (ver run_worker_first en wrangler.toml);
// el resto lo entrega Cloudflare directamente desde los archivos estáticos.

// Tipos mínimos de D1 para no depender de paquetes extra
interface D1Stmt { first<T>(): Promise<T | null> }
interface D1 { prepare(q: string): D1Stmt & { run(): Promise<unknown> }; batch(s: unknown[]): Promise<unknown> }
interface Env { ASSETS: { fetch(r: Request): Promise<Response> }; DB?: D1 }

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

async function ensure(db: D1) {
  await db.batch([
    db.prepare('CREATE TABLE IF NOT EXISTS counter (id INTEGER PRIMARY KEY, n INTEGER NOT NULL)'),
    db.prepare('INSERT OR IGNORE INTO counter (id, n) VALUES (1, 0)'),
  ]);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/visits') {
      // Sin base de datos configurada, responde 0: el sitio muestra solo la base (35.000) sin errores.
      if (!env.DB) return json({ n: 0, counting: false });
      await ensure(env.DB);
      if (request.method === 'POST') {
        const row = await env.DB.prepare('UPDATE counter SET n = n + 1 WHERE id = 1 RETURNING n').first<{ n: number }>();
        return json({ n: row?.n ?? 0 });
      }
      const row = await env.DB.prepare('SELECT n FROM counter WHERE id = 1').first<{ n: number }>();
      return json({ n: row?.n ?? 0 });
    }

    return env.ASSETS.fetch(request);
  },
};
