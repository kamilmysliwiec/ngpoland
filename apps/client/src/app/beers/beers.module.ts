import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { beersReducer } from './+store/beers.reducer';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { BeerListItemComponent } from './beer-list-item/beer-list-item.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { beersRoutes } from './beers.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(beersRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      'beers',
      {
        entities: beersReducer
      },
      {
        initialState: {
          entities: []
        }
      }
    )
  ],
  declarations: [BeerListComponent, BeerListItemComponent, AddBeerComponent]
})
export class BeersModule {}
