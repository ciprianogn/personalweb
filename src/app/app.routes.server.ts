import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

interface PrerenderPost {
  slug: string;
}

async function getContentSlugs(): Promise<Array<{ slug: string }>> {
  const response = await fetch(
    'https://prichelco.com.ar/blogs/wp-json/wp/v2/posts?categories=2&per_page=100&_fields=slug',
  );

  if (!response.ok) {
    return [];
  }

  const posts = (await response.json()) as PrerenderPost[];
  return posts.map((post) => ({ slug: post.slug }));
}

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'sobre-mi',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'comunicacion-y-mision',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'experiencia',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contacto',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contenido',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contenido/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
      return getContentSlugs();
    },
  },
  {
    path: 'contact',
    renderMode: RenderMode.Client,
  },
  {
    path: 'aboutme',
    renderMode: RenderMode.Client,
  },
  {
    path: 'services',
    renderMode: RenderMode.Client,
  },
  {
    path: 'media',
    renderMode: RenderMode.Client,
  },
  {
    path: 'cv',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blog',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blog/cat/:catId',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blog/tag/:tagId',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
