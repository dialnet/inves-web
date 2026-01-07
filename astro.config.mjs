// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://jomeridi.github.io",
  base: process.env.NODE_ENV === 'production' ? "/portal-inves/" : "/",
  integrations: [react()],
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca", "eu", "gl"],
    routing: {
      prefixDefaultLocale: true
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
