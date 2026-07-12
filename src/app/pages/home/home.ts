import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Cipriano Gorosito — Desarrollador, diseñador y creador de comunidades',
      description: 'Web personal de Cipriano Gorosito: desarrollo web, diseño y comunidades digitales.'
    });
  }
}
