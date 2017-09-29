import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumService } from './services/album.service';
import { AlbumAddComponent } from './album-add/album-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent,
    AlbumAddComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
