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
    private albumService: AlbumService,
    private router: Router
  ) {
    this.titulo = 'Crear nuevo album';
  }

  ngOnInit() {
    console.log('Album-add cargado!');
    this.album = new Album('', '');
    console.log(this.album);
  }

  onSubmit() {
    this.albumService.saveAlbum(this.album)
      .subscribe(result => {
        // success
        console.log(result);
        if (!result.album) {
          alert('Error en el servidor');
        } else {
          this.album = result.album;
          this.router.navigate(['/'])
        }
      }, err => {
         // error
         this.errorMessage = <any>err;
         if (this.errorMessage != null) {
           console.log(this.errorMessage);
           alert('Error en la peticion');
         }
      });
  }

}
