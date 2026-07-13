import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from './canonical.service';
import { StructuredDataService } from './structured-data.service';
import { siteConfig } from './site-content';

export interface SeoConfig {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    private structuredData: StructuredDataService,
  ) {}

  update(config: SeoConfig): void {
    const path = config.path ?? '/';
    const absoluteUrl = new URL(path, siteConfig.siteUrl).toString();
    const imageUrl = new URL(config.image ?? siteConfig.defaultOgImage, siteConfig.siteUrl).toString();
    const type = config.type ?? 'website';

    this.titleService.setTitle(config.title);
    this.canonical.set(absoluteUrl);

    this.setTag('name', 'description', config.description);
    this.setTag('name', 'keywords', (config.keywords ?? []).join(', '));
    this.setTag('property', 'og:title', config.title);
    this.setTag('property', 'og:description', config.description);
    this.setTag('property', 'og:type', type);
    this.setTag('property', 'og:url', absoluteUrl);
    this.setTag('property', 'og:image', imageUrl);
    this.setTag('property', 'og:site_name', siteConfig.siteName);
    this.setTag('property', 'og:locale', 'es_AR');
    this.setTag('name', 'twitter:card', 'summary_large_image');
    this.setTag('name', 'twitter:title', config.title);
    this.setTag('name', 'twitter:description', config.description);
    this.setTag('name', 'twitter:image', imageUrl);

    if (config.publishedTime) {
      this.setTag('property', 'article:published_time', config.publishedTime);
    } else {
      this.meta.removeTag("property='article:published_time'");
    }

    if (config.modifiedTime) {
      this.setTag('property', 'article:modified_time', config.modifiedTime);
    } else {
      this.meta.removeTag("property='article:modified_time'");
    }

    if (config.structuredData) {
      this.structuredData.set(config.structuredData);
    } else {
      this.structuredData.clear();
    }
  }

  private setTag(attribute: 'name' | 'property', key: string, content: string): void {
    if (!content) {
      this.meta.removeTag(`${attribute}='${key}'`);
      return;
    }

    this.meta.updateTag({ [attribute]: key, content });
  }
}
