import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumAddComponent } from './album-add/album-add.component';

const routes: Routes = [
  { path: '', component: AlbumsListComponent },
  { path: 'nuevo-album', component: AlbumAddComponent },
  { path: '**', component: AlbumsListComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
