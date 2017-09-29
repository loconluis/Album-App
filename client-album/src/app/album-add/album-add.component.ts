import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html'
})
export class AlbumAddComponent implements OnInit {
  titulo: string;
  album: Album;
  errorMessage: any;

  constructor(
    private albumService: AlbumService
  ) {
    this.titulo = 'Crear nuevo album';
  }

  ngOnInit() {
    console.log('Album-add cargado!');
  }

}
