import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatListModule],
  declarations: [],
  exports: [MatToolbarModule, MatListModule]
})
export class SharedModule {}
