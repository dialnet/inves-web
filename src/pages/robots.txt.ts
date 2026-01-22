import type { APIRoute } from 'astro';

const robotsPublico = `User-agent: *
Allow: /`;

const robotsPrivado = `User-agent: *
Disallow: /`;

export const GET: APIRoute = ({ site }) => {
  // Si la URL contiene github.io, bloqueamos. Si es otra (producción), permitimos.
  const content = site?.href.includes('github.io') ? robotsPrivado : robotsPublico;
  return new Response(content);
};
