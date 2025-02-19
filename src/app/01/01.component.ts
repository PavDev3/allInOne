import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-01',
  imports: [],
  template: `<p>01 works!</p>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {}
