import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'signin',
        canActivate: [guestGuard],
        loadComponent: () =>
          import('./features/auth/signin/signin.component').then(
            (m) => m.SigninComponent
          ),
      },
      {
        path: 'signup',
        canActivate: [guestGuard],
        loadComponent: () =>
          import('./features/auth/signup/signup.component').then(
            (m) => m.SignupComponent
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: 'signin' },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'results',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/results/results.component').then(
        (m) => m.ResultsComponent
      ),
  },
  {
    path: 'videos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/videos/videos.component').then(
        (m) => m.VideosComponent
      ),
  },
  {
    path: 'channels',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/channels/channels.component').then(
        (m) => m.ChannelsComponent
      ),
  },
  {
    path: 'reports',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/reports/reports.component').then(
        (m) => m.ReportsComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
