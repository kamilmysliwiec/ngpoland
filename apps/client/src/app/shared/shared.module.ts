import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatListModule, MatCardModule],
  declarations: [],
  exports: [MatToolbarModule, MatListModule, MatCardModule]
})
export class SharedModule {}
