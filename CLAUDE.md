# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # servidor de desarrollo
npm run build        # build de producción (salida en /dist)
npm run preview      # previsualizar build local
npm run update-stats # ejecutar el scraper y actualizar src/data/stats.json
```

No hay suite de tests ni linter configurado explícitamente; TypeScript en modo estricto actúa como primera barrera de calidad.

## Arquitectura

**Stack:** Astro 5 + React 19 + Tailwind CSS 4 + Radix UI.

### Internacionalización

El sitio es bilingüe (ES/EN) mediante el sistema i18n de Astro:

- Rutas: `/es/*` y `/en/*`. El español es el idioma por defecto.
- Cadenas de traducción: `src/i18n/ui.ts`.
- La lógica de detección del idioma vive en `src/layouts/BaseLayout.astro`, que también gestiona el cambio de slug entre idiomas (ej. `proyecto` ↔ `project`).

### Componentes

- **Astro components** (`.astro`): para contenido estático renderizado en servidor. La mayoría de la UI es Astro puro.
- **React components** (`src/components/react/`): solo para interactividad real (menú móvil, acordeón de gobernanza). Se hidratan con `client:idle`.

### Datos y estadísticas

- `src/data/stats.json` contiene las estadísticas del portal (universidades, investigadores, etc.).
- El script `scripts/scrape-stats.js` actualiza este JSON haciendo scraping de `inv-es.portalcientifico.es` con autenticación básica (credenciales vía variables de entorno `SCRAPE_USER`, `SCRAPE_PASS`, `SCRAPE_URL`).
- Los workflows de GitHub Actions actualizan `stats.json` diariamente y hacen commit a `main`. Si se produce un conflicto en local, resolverlo con `git checkout --ours src/data/stats.json`.

### Configuración por entorno

`astro.config.mjs` lee la variable `SITE` para el URL de producción (afecta a `robots.txt` y metaetiquetas SEO). La base path difiere entre GitHub Pages (`/inves-web/`) y producción (`/`).

### CI/CD

Dos workflows en `.github/workflows/`:

- `deploy.yml`: build + deploy a GitHub Pages (rama `gh-pages`) en cada push a `main`, cron diario y dispatch manual.
- `update-stats.yml`: actualiza `stats.json` y hace commit, sin redesplegar.

Secrets requeridos: `SCRAPE_USER`, `SCRAPE_PASS`, `SCRAPE_URL`.

### Alias de paths

Configurados en `tsconfig.json`: `@/*`, `@layouts/*`, `@components/*`, `@config/*`, `@assets/*`, `@utils/*`.
