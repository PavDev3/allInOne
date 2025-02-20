import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-base',
  imports: [],
  template: `<h1 class="text-2xl p-2 m-2">Base concept</h1>
    <hr />

    <h2 class="text-xl p-4">
      CounterSignal:
      {{ counterSignal() }}
    </h2>
    <button class="border p-2 m-2" (click)="increaseByOne(1)">Increase</button>
    <button class="border p-2 m-2" (click)="decreaseByOne(1)">Decrease</button>
    <button class="border p-2 m-2" (click)="resetCounterSignal()">
      Reset
    </button>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent {
  counterSignal = signal(0);

  resetCounterSignal() {
    this.counterSignal.set(0);
  }

  increaseByOne(value: number) {
    this.counterSignal.update((current) => current + value);
  }

  decreaseByOne(value: number) {
    this.counterSignal.update((current) => current - value);
  }
}
