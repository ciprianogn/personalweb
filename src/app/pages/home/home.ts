import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AnalyticsService } from '../../analytics.service';
import { SeoService } from '../../seo.service';
import { siteConfig } from '../../site-content';
import { CommunicationSystemComponent } from '../../shared/communication-system.component';
import { CmsService, ContentPost } from '../blog/blog.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe, CommunicationSystemComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly cms = inject(CmsService);
  private readonly analytics = inject(AnalyticsService);

  readonly site = siteConfig;
  featuredPosts: ContentPost[] = [];

  ngOnInit(): void {
    this.seo.update({
      title: 'Cipriano Gorosito | Comunicación, tecnología y misión',
      description: siteConfig.description,
      path: '/',
      type: 'profile',
      keywords: [
        'comunicación cristiana',
        'estrategia',
        'tecnología para la misión',
        'desarrollo de software',
        'producto digital',
        'Cipriano Gorosito',
      ],
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          image: `${siteConfig.siteUrl}/assets/img/avatar-cipriano.jpg`,
          description: siteConfig.description,
          knowsAbout: [
            'Comunicación estratégica',
            'Software y productos digitales',
            'Tecnología para iglesias y proyectos misioneros',
            'Contenido y narrativa',
          ],
          sameAs: [
            siteConfig.linkedinUrl,
            siteConfig.githubUrl,
            'https://www.instagram.com/ciprianogn/',
            'https://prichelco.com.ar/',
            'https://yateino.com.ar/',
            'https://iglesiadominico.com.ar/',
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: siteConfig.siteName,
          },
        },
      ],
    });

    this.cms
      .listRecent(1, 3)
      .pipe(catchError(() => of([])))
      .subscribe((posts) => {
        this.featuredPosts = posts;
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

  track(event: string, payload: Record<string, unknown> = {}): void {
    this.analytics.track(event, payload);
  }
}
