import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { SeoService } from '../../../seo.service';
import { siteConfig } from '../../../site-content';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { CmsService, ContentPost } from '../blog.service';

interface TocItem {
  id: string;
  label: string;
  level: 'h2' | 'h3';
}

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink, DatePipe, SafeHtmlPipe],
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly cms = inject(CmsService);
  private readonly seo = inject(SeoService);

  post: ContentPost | null = null;
  related: ContentPost[] = [];
  readingTime = '';
  excerpt = '';
  loading = true;
  toc: TocItem[] = [];
  renderedContent = '';

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.cms.postBySlug(params.get('slug') ?? '')),
        catchError(() => of(null)),
      )
      .subscribe((post) => {
        this.post = post;
        this.loading = false;

        if (!post) {
          this.seo.update({
            title: 'Artículo no encontrado | Cipriano Gorosito',
            description: 'El artículo que buscás no existe o todavía no está disponible.',
            path: '/contenido',
          });
          return;
        }

        this.readingTime = this.cms.estimateReadingTime(post.content.rendered);
        this.excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        const processed = this.decorateHeadings(post.content.rendered);
        this.renderedContent = processed.html;
        this.toc = processed.toc;

        this.seo.update({
          title: `${post.title.rendered} | Cipriano Gorosito`,
          description: this.excerpt,
          path: `/contenido/${post.slug}`,
          type: 'article',
          image: this.cms.featuredImage(post) ?? siteConfig.defaultOgImage,
          publishedTime: post.date,
          modifiedTime: post.modified,
          structuredData: [
            {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title.rendered,
              description: this.excerpt,
              datePublished: post.date,
              dateModified: post.modified,
              image: this.cms.featuredImage(post)
                ? [this.cms.featuredImage(post)]
                : [`${siteConfig.siteUrl}${siteConfig.defaultOgImage}`],
              url: `${siteConfig.siteUrl}/contenido/${post.slug}`,
              author: {
                '@type': 'Person',
                name: siteConfig.siteName,
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Inicio',
                  item: siteConfig.siteUrl,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Contenido',
                  item: `${siteConfig.siteUrl}/contenido`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: post.title.rendered,
                  item: `${siteConfig.siteUrl}/contenido/${post.slug}`,
                },
              ],
            },
          ],
        });

        this.cms
          .listRelated(post)
          .pipe(catchError(() => of([])))
          .subscribe((related) => {
            this.related = related;
          });
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

  private decorateHeadings(html: string): { html: string; toc: TocItem[] } {
    const toc: TocItem[] = [];
    let index = 0;

    const withIds = html.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi, (_match, level, attrs, content) => {
      const plain = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const id = `section-${this.slugify(plain)}-${index++}`;
      toc.push({
        id,
        label: plain,
        level: level === '3' ? 'h3' : 'h2',
      });

      return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
    });

    return { html: withIds, toc };
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
