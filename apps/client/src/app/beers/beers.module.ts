import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { BeerListItemComponent } from './beer-list-item/beer-list-item.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { beersRoutes } from './beers.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(beersRoutes), SharedModule],
  declarations: [BeerListComponent, BeerListItemComponent, AddBeerComponent]
})
export class BeersModule {}
