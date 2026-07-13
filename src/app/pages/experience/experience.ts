import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../seo.service';
import { siteConfig } from '../../site-content';

@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);
  readonly site = siteConfig;
  readonly cvPath = siteConfig.cvDownloadPath;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Experiencia y CV | Cipriano Gorosito',
      description:
        'Experiencia en desarrollo de software, producto, automatización, comunicación y construcción de sistemas digitales.',
      path: '/experiencia',
      type: 'profile',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: siteConfig.siteName,
          jobTitle: 'Desarrollo de software, producto y comunicación estratégica',
          url: `${siteConfig.siteUrl}/experiencia`,
        },
      },
    });

    this.route.queryParamMap.subscribe((params) => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      if (params.get('print') === '1') {
        this.document.defaultView?.setTimeout(() => this.document.defaultView?.print(), 250);
      }
    });
  }
}
