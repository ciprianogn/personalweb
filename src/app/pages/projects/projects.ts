import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../seo.service';
import { siteConfig } from '../../site-content';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  private readonly seo = inject(SeoService);

  readonly site = siteConfig;

  ngOnInit(): void {
    this.seo.update({
      title: 'Comunicación cristiana, estrategia y tecnología | Cipriano Gorosito',
      description:
        'Una mirada integral sobre comunicación para la misión: propósito, mensaje, equipos, contenido, tecnología y aprendizaje.',
      path: '/comunicacion-y-mision',
      type: 'website',
    });
  }
}
