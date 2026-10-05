// Contador de visitas (Cloudflare Pages Functions + base de datos D1, plan gratuito).
// POST suma una visita y devuelve el total; GET solo devuelve el total.
// El sitio muestra BASE (src/data/site.ts) + este total.

interface Env { DB: D1Database }

const headers = { 'content-type': 'application/json', 'cache-control': 'no-store' };

async function ensure(db: D1Database) {
  await db.batch([
    db.prepare('CREATE TABLE IF NOT EXISTS counter (id INTEGER PRIMARY KEY, n INTEGER NOT NULL)'),
    db.prepare('INSERT OR IGNORE INTO counter (id, n) VALUES (1, 0)'),
  ]);
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  await ensure(env.DB);
  const row = await env.DB.prepare('SELECT n FROM counter WHERE id = 1').first<{ n: number }>();
  return new Response(JSON.stringify({ n: row?.n ?? 0 }), { headers });
};

export const onRequestPost: PagesFunction<Env> = async ({ env }) => {
  await ensure(env.DB);
  const row = await env.DB.prepare('UPDATE counter SET n = n + 1 WHERE id = 1 RETURNING n').first<{ n: number }>();
  return new Response(JSON.stringify({ n: row?.n ?? 0 }), { headers });
};
