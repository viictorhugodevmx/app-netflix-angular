import { Routes } from '@angular/router';
import { ShellComponent } from '../layout/shell/shell.component';
import { authGuard } from '../core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../features/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'browse',
        canActivate: [authGuard],
        loadComponent: () =>
          import('../features/browse/browse.component')
            .then(m => m.BrowseComponent)
      },
      {
        path: 'movie/:id',
        loadComponent: () =>
          import('../features/movie-detail/movie-detail.component')
            .then(m => m.MovieDetailComponent)
      }
    ]
  }
];
