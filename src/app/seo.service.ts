import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private titleService: Title, private meta: Meta) {}

  update({ title, description }: SeoConfig): void {
    this.titleService.setTitle(title);

    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }

    this.meta.updateTag({ property: 'og:title', content: title });
  }
}
