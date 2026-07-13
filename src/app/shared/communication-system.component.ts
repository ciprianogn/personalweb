import { Component, input, signal } from '@angular/core';
import { FlowStage } from '../site-content';

@Component({
  selector: 'app-communication-system',
  standalone: true,
  templateUrl: './communication-system.component.html',
  styleUrl: './communication-system.component.css',
})
export class CommunicationSystemComponent {
  stages = input.required<FlowStage[]>();
  title = input.required<string>();
  description = input<string>('');

  protected readonly activeIndex = signal(0);

  protected setActive(index: number): void {
    this.activeIndex.set(index);
  }

  protected move(delta: number): void {
    const total = this.stages().length;
    const next = (this.activeIndex() + delta + total) % total;
    this.activeIndex.set(next);
  }
}
