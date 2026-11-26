# Loma Nevada Minca Hotel — sitio web

Sitio estático (Astro) que reemplaza el WordPress de lomanevada.com, publicado como Cloudflare Worker con archivos estáticos.

Es bilingüe. La portada en español está en `/` y la de inglés en `/en/`. Las páginas internas conservan **las URLs del sitio anterior** (español en `/es/…`, inglés en `/…`) para no perder posicionamiento en Google.

## Comandos

```bash
npm install        # una sola vez
npm run dev        # ver el sitio en http://localhost:4321 mientras editas
npm run build      # genera la carpeta dist/ lista para publicar
npm run preview    # ver dist/ en local
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Textos, precios, cabañas, ambientes, servicios, teléfono, redes | `src/data/site.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Guías de viaje (entradas) | `src/data/guides.ts` |
| Fotos | `src/assets/img/…` (se optimizan solas a WebP al compilar) |
| PDFs de privacidad | `public/docs/` |
| Colores y tipografía | `src/styles/global.css` |
| Redirecciones de páginas viejas | `public/_redirects` |

Para cambiar una foto, reemplaza el archivo con el mismo nombre. Para agregar una, ponla en la carpeta y añade su ruta a la lista `images` correspondiente en `site.ts`.

## Reservas (Cloudbeds)

El formulario de fechas abre el motor de reservas externo del hotel (hoy Cloudbeds, que administra el hotel) con llegada, salida, adultos y niños ya cargados. Como alternativa, el enlace "o pregúntanos por WhatsApp" arma el mensaje con los mismos datos.

El motor se configura en una sola línea: `bookingEngine` en `src/data/site.ts`. La página abre esa dirección con estos parámetros:

```
?checkin=AAAA-MM-DD&checkout=AAAA-MM-DD&adults=N&kids=N&currency=cop
```

Cualquier motor que acepte esos parámetros (por ejemplo, uno propio en el futuro) se conecta cambiando solo esa línea.

## Contador de visitas

Se muestra en el pie de página: `visitsBase` (35.000, en `src/data/site.ts`) más las visitas reales, una por sesión. Lo atiende el Worker (`worker/index.ts`, ruta `/api/visits`) con la base de datos D1 gratuita `lomanevada-visitas`, configurada en `wrangler.toml`. La tabla se crea sola en la primera visita. Si la base no está disponible en la configuración, responde 0 y el pie muestra solo la cifra base.

Para probar todo en local, incluido el contador: `npm run build` y luego `npx wrangler dev`.

## Formulario de contacto

Sin configuración, el formulario abre WhatsApp con el mensaje ya escrito.
Para que llegue al correo, crea una clave gratis en https://web3forms.com (con contacto@lomanevada.com) y agrégala en Cloudflare como **variable del build** del Worker (*Workers & Pages* → `lomanevada` → *Settings* → *Build* → *Variables and secrets*):

```
PUBLIC_WEB3FORMS_KEY=tu-clave
```

Se lee al compilar, así que hay que lanzar un build nuevo después de agregarla.

## Publicación

El Worker `lomanevada` está conectado a este repositorio con Workers Builds: **cada push a `main` compila y publica el sitio** en https://lomanevada.com. La configuración está en `wrangler.toml`.

## Dominio y DNS

- El dominio está registrado en GoDaddy (vence el 2027-10-03) y el DNS se administra en Cloudflare.
- `www` redirige a `lomanevada.com`.
- El correo sigue en Microsoft 365. No borrar ni modificar sus registros: MX `lomanevada-com.mail.protection.outlook.com`, los TXT (SPF y verificación de Microsoft) y los CNAME `autodiscover` y `email`.

Las redirecciones de páginas viejas están en `public/_redirects` y los encabezados de caché y seguridad en `public/_headers`.
