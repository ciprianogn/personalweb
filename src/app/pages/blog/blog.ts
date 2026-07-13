import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { SeoService } from '../../seo.service';
import { siteConfig } from '../../site-content';
import { CmsService, ContentPost } from './blog.service';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  private readonly cms = inject(CmsService);
  private readonly seo = inject(SeoService);

  readonly site = siteConfig;

  posts: ContentPost[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.seo.update({
      title: 'Ideas sobre comunicación, misión y tecnología | Cipriano Gorosito',
      description:
        'Artículos y reflexiones sobre comunicación cristiana, estrategia, creatividad, producto y tecnología aplicada.',
      path: '/contenido',
      type: 'website',
    });

    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';

    this.cms
      .listRecent(1, 9)
      .pipe(
        catchError(() => {
          this.error = 'No pude cargar el contenido en este momento.';
          return of([]);
        }),
      )
      .subscribe((posts) => {
        this.posts = posts;
        this.loading = false;
      });
  }

  imageFor(post: ContentPost): string | null {
    return this.cms.featuredImage(post);
  }

  altFor(post: ContentPost): string {
    return this.cms.featuredAlt(post);
  }

  excerptFor(post: ContentPost): string {
    return post.excerpt.rendered.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  readingTimeFor(post: ContentPost): string {
    return this.cms.estimateReadingTime(post.content.rendered);
  }
}
