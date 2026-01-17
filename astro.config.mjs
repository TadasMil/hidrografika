import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://tadasmil.github.io',
  base: process.env.NODE_ENV === 'production' ? '/hidrografika' : undefined,
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
