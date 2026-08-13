import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  {
    path: 'sobre-mi',
    loadComponent: () => import('./pages/aboutme/aboutme').then((m) => m.Aboutme),
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  { path: 'comunicacion-y-mision', redirectTo: 'proyectos', pathMatch: 'full' },
  {
    path: 'experiencia',
    loadComponent: () => import('./pages/experience/experience').then((m) => m.Experience),
  },
  {
    path: 'contenido',
    loadChildren: () => import('./pages/blog/blog.routes').then((m) => m.BLOG_ROUTES),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: 'contact', redirectTo: 'contacto', pathMatch: 'full' },
  { path: 'aboutme', redirectTo: 'sobre-mi', pathMatch: 'full' },
  { path: 'services', redirectTo: 'proyectos', pathMatch: 'full' },
  { path: 'media', redirectTo: 'contenido', pathMatch: 'full' },
  { path: 'cv', redirectTo: 'experiencia', pathMatch: 'full' },
  { path: 'blog', redirectTo: 'contenido', pathMatch: 'full' },
  { path: 'blog/:slug', redirectTo: 'contenido/:slug', pathMatch: 'full' },
  { path: 'blog/cat/:catId', redirectTo: 'contenido', pathMatch: 'full' },
  { path: 'blog/tag/:tagId', redirectTo: 'contenido', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
