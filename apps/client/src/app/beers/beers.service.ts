import { Injectable } from '@angular/core';
import { Beer } from '@ngpoland/shared';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  private readonly beers: Beer[] = [
    {
      id: 1,
      name: 'Kozel',
      category: 'Lager'
    },
    {
      id: 2,
      name: 'Komes',
      category: 'Porter'
    }
  ];
  constructor() {}

  findAll(): Observable<Beer[]> {
    return of(this.beers);
  }
}
