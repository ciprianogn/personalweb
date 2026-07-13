import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

export interface ContentPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

@Injectable({ providedIn: 'root' })
export class CmsService {
  private readonly api = `${env.wpApi}/posts`;

  constructor(private http: HttpClient) {}

  listRecent(page = 1, perPage = 12): Observable<ContentPost[]> {
    const params = new HttpParams({
      fromObject: {
        categories: 2,
        _embed: '1',
        per_page: perPage,
        page,
        orderby: 'date',
        order: 'desc',
      },
    });

    return this.http.get<ContentPost[]>(this.api, { params });
  }

  searchRecent(query: string, page = 1, perPage = 12): Observable<ContentPost[]> {
    const params = new HttpParams({
      fromObject: {
        categories: 2,
        search: query,
        _embed: '1',
        per_page: perPage,
        page,
        orderby: 'date',
        order: 'desc',
      },
    });

    return this.http.get<ContentPost[]>(this.api, { params });
  }

  postBySlug(slug: string): Observable<ContentPost | null> {
    const params = new HttpParams({ fromObject: { slug, _embed: '1' } });
    return this.http
      .get<ContentPost[]>(this.api, { params })
      .pipe(map((posts) => posts[0] ?? null));
  }

  listRelated(post: ContentPost, perPage = 3): Observable<ContentPost[]> {
    const category = post.categories[0];
    const params = new HttpParams({
      fromObject: {
        categories: category,
        _embed: '1',
        per_page: perPage + 1,
        orderby: 'date',
        order: 'desc',
      },
    });

    return this.http
      .get<ContentPost[]>(this.api, { params })
      .pipe(map((posts) => posts.filter((item) => item.slug !== post.slug).slice(0, perPage)));
  }

  featuredImage(post: ContentPost): string | null {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
  }

  featuredAlt(post: ContentPost): string {
    return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;
  }

  estimateReadingTime(html: string): string {
    const plain = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = plain ? plain.split(' ').length : 0;
    const minutes = Math.max(1, Math.round(words / 220));
    return `${minutes} min de lectura`;
  }
}
