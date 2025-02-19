import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './../../app.routes';

@Component({
  selector: 'app-sidemenu',
  imports: [CommonModule, RouterModule],

  templateUrl: './sidemenu.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));
}
