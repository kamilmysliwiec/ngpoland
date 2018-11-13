import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './beers/beers.module#BeersModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
