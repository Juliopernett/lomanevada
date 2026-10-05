// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lomanevada.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { responsiveStyles: true },
  integrations: [
    // Las URLs ES y EN tienen slugs distintos; los hreflang van en el <head> de cada página.
    sitemap(),
  ],
});
