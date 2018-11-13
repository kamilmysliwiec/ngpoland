import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BeerListItemComponent } from './beer-list-item/beer-list-item.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { beersRoutes } from './beers.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(beersRoutes)],
  declarations: [BeerListComponent, BeerListItemComponent]
})
export class BeersModule {}
