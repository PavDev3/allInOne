import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: 'Base',
        title: 'Base Component',
        loadComponent: () =>
          import('./components/base/base.component').then(
            (m) => m.BaseComponent
          ),
      },
      {
        path: 'Hero',
        title: 'Hero Component',
        loadComponent: () =>
          import('./components/hero/hero.component').then(
            (m) => m.HeroComponent
          ),
      },
    ],
  },
];
