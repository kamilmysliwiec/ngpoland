import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Beer } from '@ngpoland/shared';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import {
  CreateBeerAction,
  ItemsLoadedAction,
  RemoveBeerAction
} from '../+store/beers.actions';
import { getBeers } from '../+store/beers.selectors';
import { BeersService } from '../beers.service';

@Component({
  selector: 'ngpoland-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent implements OnInit, OnDestroy {
  beers$: Observable<Beer[]> = this.store.pipe(select(getBeers));

  private readonly onDestroy$ = new Subject<any>();

  constructor(
    private readonly beersService: BeersService,
    private readonly store: Store<any>
  ) {}

  ngOnInit() {
    this.beersService
      .findAll()
      .subscribe(data => this.store.dispatch(new ItemsLoadedAction(data)));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  onRemoveBeer(beerId: number) {
    this.store.dispatch(new RemoveBeerAction({ id: beerId }));
  }

  onCreateBeer(beer: Beer) {
    this.store.dispatch(new CreateBeerAction({ ...beer, id: 3 }));
  }
}
