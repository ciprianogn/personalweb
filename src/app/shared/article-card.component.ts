import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../analytics.service';
import { ContentPost } from '../pages/blog/blog.service';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  template: `
    <article class="article-card">
      @if (image()) {
        <img
          class="article-card-image"
          [src]="image()!"
          [alt]="imageAlt() || post().title.rendered"
          width="800"
          height="450"
          loading="lazy"
        />
      }

      <div class="article-card-body">
        <div class="article-card-meta">
          @if (category()) {
            <span>{{ category() }}</span>
          }
          <span>{{ post().date | date: 'd MMM y' }}</span>
          @if (readingTime()) {
            <span>{{ readingTime() }}</span>
          }
        </div>

        <h3 class="article-card-title">
          <a [routerLink]="['/contenido', post().slug]" (click)="trackOpen()">
            {{ post().title.rendered }}
          </a>
        </h3>

        <p class="article-card-text">{{ excerpt() }}</p>

        <a class="inline-link" [routerLink]="['/contenido', post().slug]" (click)="trackOpen()">
          Leer artículo
        </a>
      </div>
    </article>
  `,
})
export class ArticleCardComponent {
  private readonly analytics = inject(AnalyticsService);

  post = input.required<ContentPost>();
  image = input<string | null>(null);
  imageAlt = input<string>('');
  excerpt = input.required<string>();
  category = input<string>('Contenido');
  readingTime = input<string>('');

  trackOpen(): void {
    this.analytics.track('article_open', { slug: this.post().slug });
  }
}
