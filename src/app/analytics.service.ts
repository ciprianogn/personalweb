import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  track(event: string, payload: Record<string, unknown> = {}): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const windowRef = this.document.defaultView;
    if (!windowRef) {
      return;
    }

    windowRef.dataLayer = windowRef.dataLayer ?? [];
    windowRef.dataLayer.push({ event, ...payload });
  }
}
