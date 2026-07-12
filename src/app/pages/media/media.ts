import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../seo.service';

// TODO: integrar feed real de YouTube (embed o API vía personalweb-api)
@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class Media implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Videos — Cipriano Gorosito',
      description: 'Devocionales, charlas y proyectos en video. Canal de YouTube de Cipriano Gorosito.'
    });
  }
}
