import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatChipsModule
  ],
  declarations: [],
  exports: [MatToolbarModule, MatListModule, MatCardModule, MatChipsModule]
})
export class SharedModule {}
