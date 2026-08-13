import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeoService } from '../../seo.service';
import { siteConfig } from '../../site-content';
import { ContactService } from './contact.service';

type ContactMode = 'career' | 'project';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly seo = inject(SeoService);

  readonly site = siteConfig;
  readonly contactMode = signal<ContactMode>('career');

  readonly form = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    empresa: [''],
    opportunityType: ['', [Validators.required]],
    modality: [''],
    organization: [''],
    projectType: [''],
    stage: [''],
    objective: [''],
    mensaje: ['', [Validators.required, Validators.minLength(20)]],
    consentimiento: [false, [Validators.requiredTrue]],
    website: [''],
  });

  enviando = false;
  enviado = false;
  errorMsg = '';

  ngOnInit(): void {
    this.seo.update({
      title: 'Contacto | Cipriano Gorosito',
      description:
        'Contacto para oportunidades profesionales y proyectos de producto, software, automatización e integración.',
      path: '/contacto',
      type: 'website',
    });

    this.applyModeValidators('career');
  }

  setMode(mode: ContactMode): void {
    this.contactMode.set(mode);
    this.errorMsg = '';
    this.applyModeValidators(mode);
  }

  onSubmit(): void {
    if (this.form.get('website')?.value) {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.errorMsg = '';

    const value = this.form.getRawValue();
    const mode = this.contactMode();
    const composedMessage =
      mode === 'career'
        ? [
            'Tipo de contacto: Oportunidad profesional',
            value.empresa ? `Empresa: ${value.empresa}` : '',
            value.opportunityType ? `Tipo de oportunidad: ${value.opportunityType}` : '',
            value.modality ? `Modalidad: ${value.modality}` : '',
            '',
            value.mensaje,
          ]
        : [
            'Tipo de contacto: Proyecto digital',
            value.organization ? `Organización: ${value.organization}` : '',
            value.projectType ? `Tipo de proyecto: ${value.projectType}` : '',
            value.stage ? `Etapa actual: ${value.stage}` : '',
            value.objective ? `Problema u objetivo: ${value.objective}` : '',
            '',
            value.mensaje,
          ];

    this.contactService
      .enviar({
        nombre: value.nombre ?? '',
        email: value.email ?? '',
        mensaje: composedMessage.filter(Boolean).join('\n'),
      })
      .subscribe({
        next: () => {
          this.enviado = true;
          this.enviando = false;
          this.form.reset({ consentimiento: false, website: '' });
        },
        error: (err: Error) => {
          this.enviando = false;
          this.errorMsg = err.message;
        },
      });
  }

  private applyModeValidators(mode: ContactMode): void {
    const opportunityType = this.form.get('opportunityType');
    const projectType = this.form.get('projectType');

    if (mode === 'career') {
      opportunityType?.setValidators([Validators.required]);
      projectType?.clearValidators();
      projectType?.setValue('', { emitEvent: false });
    } else {
      projectType?.setValidators([Validators.required]);
      opportunityType?.clearValidators();
      opportunityType?.setValue('', { emitEvent: false });
    }

    opportunityType?.updateValueAndValidity({ emitEvent: false });
    projectType?.updateValueAndValidity({ emitEvent: false });
  }
}
