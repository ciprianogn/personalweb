import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild, effect, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { siteConfig } from '../../site-content';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  @ViewChild('menuButton') private menuButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('firstMenuLink') private firstMenuLink?: ElementRef<HTMLAnchorElement>;

  readonly navigation = siteConfig.navigation;
  readonly menuOpen = signal(false);
  readonly isScrolled = signal(false);
  readonly brandTagline = siteConfig.shortTagline;

  private readonly isBrowser: boolean;

  constructor(
    public router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    effect(() => {
      if (!this.isBrowser) {
        return;
      }

      this.document.body.classList.toggle('overflow-hidden', this.menuOpen());

      if (this.menuOpen()) {
        queueMicrotask(() => this.firstMenuLink?.nativeElement.focus());
      }
    });

    if (this.isBrowser) {
      this.updateScrollState();
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(restoreFocus = false): void {
    this.menuOpen.set(false);

    if (restoreFocus) {
      queueMicrotask(() => this.menuButton?.nativeElement.focus());
    }
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu(true);
    }
  }

  @HostListener('window:scroll')
  handleScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    this.updateScrollState();
  }

  isActive(path: string): boolean {
    return path === '/' ? this.router.url === '/' : this.router.url.startsWith(path);
  }

  private updateScrollState(): void {
    const viewport = this.document.defaultView;
    this.isScrolled.set((viewport?.scrollY ?? 0) > 24);
  }
}
