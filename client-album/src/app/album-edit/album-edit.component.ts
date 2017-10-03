import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html'
})
export class AlbumEditComponent implements OnInit {
  _title: string;
  errorMessage: any;
  album: Album;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this._title = 'Editar album';
  }

  ngOnInit() {
    console.log(this._title);
    this.album = new Album('', '');
    console.log('component edit cargado');
    this.getAlbumForEdit();
  }

  getAlbumForEdit() {
    this.route.params.forEach((params: Params) => {
      const id = params['id'];

      // inyectamos el servicio
      this.albumService.getAlbum(id)
        .subscribe(response => {
          // console.log(response);
          this.album = response.album;
          // si no existe el album regresa al HOME
          if (!this.album) {
            this.router.navigate(['/']);
          }

        }, err => {
          this.errorMessage = <any>err;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la peticion');
          }
        });
    });
  }

  onSubmit() {
    // console.log(this.favorite)
    this.route.params.forEach((params: Params) => {
      const id = params['id'];
      this.albumService.editAlbum(id, this.album)
        .subscribe(response => {
          // success
          if (!response.UpdateAlbum) {
            alert('Error en el servidor');
          } else {
            // console.log(response.UpdateAlbum);

            this.album = response.UpdateAlbum;
            this.router.navigate(['/album/', id]);
          }

        }, err => {
          // error
          this.errorMessage = <any>err;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la peticion');
          }
        });
    });
  }
}
