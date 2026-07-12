import { Component, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from './contact.service';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({ title: 'Contacto — Cipriano Gorosito' });
  }

  form: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: [''],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
    // Honeypot anti-spam — debe quedar vacío
    website: [''],
  });

  enviando = false;
  enviado = false;
  errorMsg = '';

  onSubmit(): void {
    // Anti-spam: si el honeypot viene relleno, cortamos silenciosamente
    if (this.form.get('website')?.value) {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.errorMsg = '';

    const { nombre, apellido, email, telefono, mensaje } = this.form.value;

    this.contactService.enviar({ nombre, apellido, email, telefono, mensaje }).subscribe({
      next: () => {
        this.enviando = false;
        this.enviado = true;
        this.form.reset();
      },
      error: (err: Error) => {
        this.enviando = false;
        this.errorMsg = err.message;
      },
    });
  }
}
