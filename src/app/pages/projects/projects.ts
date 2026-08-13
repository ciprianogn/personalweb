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
      title: 'Proyectos de producto y tecnología | Cipriano Gorosito',
      description:
        'Proyectos y experiencias conectando análisis funcional, desarrollo de software, automatización y coordinación entre áreas.',
      path: '/proyectos',
      type: 'website',
    });
  }
}
