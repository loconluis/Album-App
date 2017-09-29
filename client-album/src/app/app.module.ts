import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
