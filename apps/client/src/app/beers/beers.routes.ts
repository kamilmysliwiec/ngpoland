import { Route } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';

export const beersRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: BeerListComponent
  }
];
