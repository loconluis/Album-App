import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ImageService } from '../services/image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html'
})
export class ImageDetailComponent implements OnInit {
  auxAlbum: any;
  flagToDelete: any;
  image: Image;
  errorMessage: any;
  uploadApi: string;

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('cargado el componente de image-detail');
    this.uploadApi = this.imageService.getUrl() + 'get-image/';
    // console.log(this.uploadApi);
    this.getImage();
  }

  getImage() {
    this.route.params.forEach((params: Params) => {
      const id = params['id'];

      // inyectamos el servicio
      this.imageService.getImage(id)
        .subscribe(response => {
          // console.log(response);
          this.image = response.image;
          // si no existe el album regresa al HOME
          if (!this.image) {
            this.router.navigate(['/']);
          }
          // show image

        }, err => { // error del metodo que trae los album
          this.errorMessage = <any>err;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la peticion');
          }
        });
    });
  }

  onDeleteConfirm(id) {
    this.flagToDelete = id;
  }

  onCancelConfirm(id) {
   this.flagToDelete = null;
  }

  onDeleteImage(id, albumID) {
    this.auxAlbum = albumID;
    this.imageService.deleteImage(id)
     .subscribe(response => {
       if (!response.messageConfirm) {
         alert('Error en la peticion');
       }
       this.router.navigate(['/album', this.auxAlbum]);

     }, err => {
       // error
       this.errorMessage = <any>err;
       if (this.errorMessage != null) {
         console.log(this.errorMessage);
         alert('Error en la peticion');
       }
     });
  }

  hi() {
    alert('Hola' + this.image );
    console.log(this.image);
  }

}
