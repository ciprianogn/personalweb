import { Routes } from '@angular/router';
import { Blog } from './blog';
import { BlogPostComponent } from './post/blog-post.component';

export const BLOG_ROUTES: Routes = [
  { path: '', component: Blog },
  { path: ':slug', component: BlogPostComponent },
];
