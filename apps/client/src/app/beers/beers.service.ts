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
      volume: 5.5
    }
  ];
  constructor() {}

  findAll(): Observable<Beer[]> {
    return of(this.beers);
  }
}
