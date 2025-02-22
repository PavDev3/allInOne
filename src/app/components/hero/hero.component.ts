import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `<h1>{{ name() }}</h1>

    <dl>
      <td>Nombre:</td>
      <dd>{{ name() }}</dd>

      <td>Edad:</td>
      <dd>{{ age() }}</dd>

      <td>Método:</td>
      <dd>{{ getHeroDescription() }}</dd>

      <td>Capitalizado:</td>
      <dd>{{ name().toUpperCase() }}</dd>
    </dl>

    <button (click)="changeHero()" class="btn btn-primary mx-2">
      Cambiar nombre
    </button>

    <button (click)="changeAge()" class="btn btn-primary">Cambiar edad</button>

    <button (click)="resetForm()" class="btn btn-primary mx-2">Reset</button> `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  name = signal('IronMan');
  age = signal('45');

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set('22');
  }

  changeAge() {
    this.age.set('60');
  }

  resetForm() {
    this.name.set('IronMan');
    this.age.set('45');
  }
}
