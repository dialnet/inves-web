// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE || "https://dialnet.github.io",
  base: process.env.NODE_ENV === 'production' ? "/inves-web/" : "/",
  integrations: [react()],
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
