import { Injectable } from '@nestjs/common';
import { Beer } from '@ngpoland/shared';

@Injectable()
export class BeersService {
  private beers: Beer[] = [
    {
      id: 1,
      name: 'Kozel',
      category: 'Lager',
      rating: 5,
    },
    {
      id: 2,
      name: 'Komes',
      category: 'Porter',
      rating: 4,
    },
  ];

  findAll(): Beer[] {
    return this.beers;
  }

  findOne(id: number): Beer | undefined {
    return this.beers.find(beer => beer.id === id);
  }

  create(createBeerDto: Beer) {
    this.beers.push(createBeerDto);
  }

  remove(id: number) {
    this.beers = this.beers.filter(beer => beer.id !== id);
  }
}
