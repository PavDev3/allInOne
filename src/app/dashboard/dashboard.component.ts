import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterOutlet, SidemenuComponent],
  template: `<div
    class="flex bg-slate-100 text-black overflow-y-scroll w-screen h-screen antialiased selection:bg-blue-600 selection:text-white"
  >
    <div class="flex relative w-screen">
      <app-sidemenu />
      <div class="text-black px-2 mt-2 w-full">
        <router-outlet />
      </div>
    </div>
  </div> `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
