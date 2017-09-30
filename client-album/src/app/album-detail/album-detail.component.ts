import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  errorMessage: any;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getAlbum() {
    this.route.params.forEach((params: Params) => {
      const id = params['id'];

      // inyectamos el servicio
      this.albumService.getAlbum(id)
        .subscribe(response => {
          // console.log(response.fav);
          this.album = response.album;
          // si no existe el favorito regresa al HOME
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

}
