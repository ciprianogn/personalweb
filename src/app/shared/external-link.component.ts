import { Component, input } from '@angular/core';

@Component({
  selector: 'app-external-link',
  standalone: true,
  template: `
    <a
      class="external-link"
      [href]="href()"
      [attr.target]="newTab() ? '_blank' : null"
      [attr.rel]="newTab() ? 'noopener noreferrer' : null"
      [attr.aria-label]="ariaLabel() || label()"
    >
      <span>{{ label() }}</span>
      <span aria-hidden="true">↗</span>
    </a>
  `,
})
export class ExternalLinkComponent {
  label = input.required<string>();
  href = input.required<string>();
  ariaLabel = input<string>('');
  newTab = input(false);
}
