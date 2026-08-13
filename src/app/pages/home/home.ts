import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../analytics.service';
import { SeoService } from '../../seo.service';
import { siteConfig } from '../../site-content';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly analytics = inject(AnalyticsService);

  readonly site = siteConfig;

  ngOnInit(): void {
    this.seo.update({
      title: 'Cipriano Gorosito | Producto, tecnología y liderazgo',
      description: siteConfig.description,
      path: '/',
      type: 'profile',
      keywords: [
        'producto digital',
        'liderazgo técnico',
        'análisis funcional',
        'desarrollo de software',
        'automatización',
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
            'Software y productos digitales',
            'Análisis funcional',
            'Integraciones y automatización',
            'Coordinación entre áreas',
          ],
          sameAs: [
            siteConfig.linkedinUrl,
            siteConfig.githubUrl,
            'https://prichelco.com.ar/',
            'https://yateino.com.ar/',
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
  }

  track(event: string, payload: Record<string, unknown> = {}): void {
    this.analytics.track(event, payload);
  }
}
