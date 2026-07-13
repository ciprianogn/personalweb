import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main id="main-content" class="page-shell">
      <section class="section">
        <div class="surface-card max-w-3xl">
          <p class="section-eyebrow">CV</p>
          <h1 class="hero-title max-w-none text-balance">La presentación principal ahora vive dentro del sitio.</h1>
          <p class="hero-copy max-w-2xl">
            Reorganicé esta información para que la trayectoria no se vea como un CV aislado, sino como parte de una mirada más amplia.
          </p>
          <div class="button-row">
            <a class="button-primary" routerLink="/sobre-mi">Ir a mi enfoque</a>
            <a class="button-secondary" routerLink="/contacto">Contactar</a>
          </div>
        </div>
      </section>
    </main>
  `,
})
export class Cv implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'CV | Cipriano Gorosito',
      description: 'Acceso a la presentación profesional integrada dentro del sitio.',
      path: '/cv',
    });
  }
}
