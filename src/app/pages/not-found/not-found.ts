import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
})
export class NotFound implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Página no encontrada | Cipriano Gorosito',
      description: 'La página que buscás no existe o fue movida dentro del nuevo sitio.',
      path: '/404',
      type: 'website',
    });
  }
}
