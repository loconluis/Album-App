import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { ImageService } from '../services/image.service';
import { Album } from '../models/album.model';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  images: Array<Image>;
  errorMessage: any;
  uploadApi: string;

  constructor(
    private albumService: AlbumService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('en el detalle de componentes');
    this.getAlbum();
    this.uploadApi = this.albumService.getUploadApi();
    // console.log(this.uploadApi);
  }

  getAlbum() {
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

          // llamada a las imagenes del album
          this.getImagesOnAlbum(response.album._id);

        }, err => { // error del metodo que trae los album
          this.errorMessage = <any>err;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la peticion');
          }
        });
    });
  }

  getImagesOnAlbum(id: string) {
    // llamada al servicio de imagenes
    this.imageService.getImages(id)
    .subscribe(result => {
      // exito
      // console.log(result);
      this.images = result.images;
      // si no existen las imagenes
      if (!this.images) {
        alert('Sin imagenes');
      }

    }, err => {
      this.errorMessage = <any>err;
      if (this.errorMessage != null) {
        console.log(this.errorMessage);
        alert('Error en la peticion');
      }
    });
  }

}
