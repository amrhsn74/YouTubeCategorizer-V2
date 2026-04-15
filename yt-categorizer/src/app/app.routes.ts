import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./features/results/results.component').then(
        (m) => m.ResultsComponent
      ),
  },
  {
    path: 'videos',
    loadComponent: () =>
      import('./features/videos/videos.component').then(
        (m) => m.VideosComponent
      ),
  },
  {
    path: 'channels',
    loadComponent: () =>
      import('./features/channels/channels.component').then(
        (m) => m.ChannelsComponent
      ),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/reports.component').then(
        (m) => m.ReportsComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
