import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  private readonly marker = 'data-structured';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  set(data: Record<string, unknown> | Record<string, unknown>[]): void {
    this.clear();

    const entries = Array.isArray(data) ? data : [data];

    for (const entry of entries) {
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute(this.marker, 'true');
      script.text = JSON.stringify(entry);
      this.document.head.appendChild(script);
    }
  }

  clear(): void {
    this.document.head
      .querySelectorAll(`script[${this.marker}="true"]`)
      .forEach((node) => node.remove());
  }
}
