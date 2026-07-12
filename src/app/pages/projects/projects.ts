import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Servicios — Cipriano Gorosito',
      description: 'Servicios de desarrollo web, diseño y construcción de comunidades digitales.'
    });
  }
}
