import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// album components
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumAddComponent } from './album-add/album-add.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
// imagen components
import { ImageAddComponent } from './image-add/image-add.component';
import { ImageEditComponent } from './image-edit/image-edit.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

const routes: Routes = [
  { path: '', component: AlbumsListComponent },
  { path: 'nuevo-album', component: AlbumAddComponent },
  { path: 'album/:id', component: AlbumDetailComponent },
  { path: 'album/editar/:id', component: AlbumEditComponent },
  { path: 'nueva-imagen/:album', component: ImageAddComponent },
  { path: 'imagen/editar/:id', component: ImageEditComponent },
  { path: 'imagen/:id', component: ImageDetailComponent },
  { path: '**', component: AlbumsListComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
