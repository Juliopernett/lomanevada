# Loma Nevada Minca Hotel — sitio web

Sitio estático (Astro) que reemplaza el WordPress de lomanevada.com. Bilingüe: inglés en `/` y español en `/es/`, con **las mismas URLs del sitio anterior** para no perder posicionamiento en Google.

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

Se muestra en el pie de página: `visitsBase` (35.000, en `src/data/site.ts`) más las visitas reales, una por sesión. Funciona con Cloudflare Pages Functions (`functions/api/visits.ts`) y una base de datos D1 gratuita:

```bash
npx wrangler d1 create lomanevada-visitas   # copiar el database_id en wrangler.toml
```

Para probar todo en local, incluido el contador: `npm run build` y luego `npx wrangler pages dev dist`.

## Formulario de contacto

Sin configuración, el formulario abre WhatsApp con el mensaje ya escrito.
Para que llegue al correo, crea una clave gratis en https://web3forms.com (con contacto@lomanevada.com) y agrégala como variable de entorno en Vercel:

```
PUBLIC_WEB3FORMS_KEY=tu-clave
```

## Publicar en Cloudflare Pages (gratis, SSL incluido)

1. Sube esta carpeta a un repositorio de GitHub.
2. En Cloudflare → *Workers & Pages* → *Create* → *Pages* → conecta el repositorio. Comando de build: `npm run build`; carpeta: `dist`.
3. Crea la base D1 (ver arriba) y vincúlala al proyecto con el nombre `DB`.
4. Revisa el sitio en la dirección temporal `*.pages.dev`.
5. Agrega `lomanevada.com` como dominio propio. Cloudflare pedirá cambiar los nameservers en GoDaddy. Antes, verifica que en Cloudflare estén copiados los registros del correo de Microsoft 365: MX `lomanevada-com.mail.protection.outlook.com`, los TXT (SPF y verificación de Microsoft) y los CNAME `autodiscover` y `email`.

Las redirecciones de páginas viejas están en `public/_redirects` y los encabezados de caché y seguridad en `public/_headers`.
