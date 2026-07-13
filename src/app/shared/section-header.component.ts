import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="max-w-3xl">
      @if (eyebrow()) {
        <p class="section-eyebrow">{{ eyebrow() }}</p>
      }
      <h2 class="section-title">{{ title() }}</h2>
      @if (description()) {
        <p class="section-description">{{ description() }}</p>
      }
    </div>
  `,
})
export class SectionHeaderComponent {
  eyebrow = input<string>('');
  title = input.required<string>();
  description = input<string>('');
}
