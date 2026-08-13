import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const siteUrl = 'https://cipriano.prichelco.com.ar';
const staticRoutes = ['/', '/sobre-mi', '/proyectos', '/experiencia', '/contacto'];
const endpoint =
  'https://prichelco.com.ar/blogs/wp-json/wp/v2/posts?categories=2&per_page=100&_fields=slug,modified';

async function fetchPosts() {
  try {
    const response = await fetch(endpoint);
    const contentType = response.headers.get('content-type') ?? '';

    if (!response.ok || !contentType.includes('application/json')) {
      console.warn('El CMS no devolvió JSON; el sitemap se generará solo con rutas estáticas.');
      return [];
    }

    return response.json();
  } catch (error) {
    console.warn(
      'No se pudo consultar el CMS; el sitemap se generará solo con rutas estáticas.',
      error,
    );
    return [];
  }
}

function xmlUrl(url, lastmod) {
  return [
    '  <url>',
    `    <loc>${url}</loc>`,
    lastmod ? `    <lastmod>${new Date(lastmod).toISOString()}</lastmod>` : '',
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
}

const posts = await fetchPosts();
const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...staticRoutes.map((route) => xmlUrl(`${siteUrl}${route}`)),
  ...posts.map((post) => xmlUrl(`${siteUrl}/contenido/${post.slug}`, post.modified)),
  '</urlset>',
  '',
];

await writeFile(resolve('public', 'sitemap.xml'), lines.join('\n'));
