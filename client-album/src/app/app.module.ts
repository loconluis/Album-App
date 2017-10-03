import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumService } from './services/album.service';
import { AlbumAddComponent } from './album-add/album-add.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent,
    AlbumAddComponent,
    AlbumDetailComponent,
    AlbumEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
