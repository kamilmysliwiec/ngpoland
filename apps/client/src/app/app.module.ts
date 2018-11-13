import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      enableTracing: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
