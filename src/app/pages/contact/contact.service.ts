// TODO backend: implementar POST ${apiBase}/contact en personalweb-api
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
  nombre: string;
  apellido?: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private http = inject(HttpClient);

  enviar(payload: ContactPayload) {
    return this.http
      .post<{ success: boolean }>(`${environment.apiBase}/contact`, payload)
      .pipe(
        catchError(err => {
          const msg =
            err?.error?.message ??
            'No se pudo enviar el mensaje. Intentá de nuevo más tarde.';
          return throwError(() => new Error(msg));
        })
      );
  }
}
