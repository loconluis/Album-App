import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  titulo: string;
  albums: Album[];
  errorMessage: any;


  constructor(
    private albumService: AlbumService
  ) {
    this.titulo = 'Lista de Albums';
  }

  ngOnInit() {
    console.log('Lista de albums cargados!');
    this.getAlbums();
  }

  getAlbums () {
    this.albumService.getAlbums()
      .subscribe(result => {
        // console.log(result.albums);
        this.albums = result.albums;
        if (!this.albums) {
          alert('Error en el servidor');
        } else {
          //
        }
      }, err => {
        this.errorMessage = <any>err;
        if (this.errorMessage != null) {
          alert('Ver la consola hay un error');
          console.log('err', err);
        }
      });
  }

}
