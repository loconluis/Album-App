import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from './albums-list/albums-list.component';

const routes: Routes = [
  { path: '', component: AlbumsListComponent },
  { path: '**', component: AlbumsListComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
