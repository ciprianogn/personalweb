import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../seo.service';
import { siteConfig } from '../../site-content';

@Component({
  selector: 'app-aboutme',
  imports: [RouterLink],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css',
})
export class Aboutme implements OnInit {
  private readonly seo = inject(SeoService);

  readonly site = siteConfig;

  ngOnInit(): void {
    this.seo.update({
      title: 'Mi enfoque | Cipriano Gorosito',
      description:
        'Cómo conecto estrategia, creatividad y tecnología dentro de un mismo sistema de trabajo.',
      path: '/sobre-mi',
      type: 'profile',
    });
  }
}
