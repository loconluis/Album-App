import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Image } from '../models/image.model';
import { ImageService } from '../services/image.service';


@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html'
})
export class ImageAddComponent implements OnInit {
  titulo: string;
  image: Image;
  errorMessage: any;

  constructor(
    private imageService: ImageService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.titulo = 'Añadir nueva imagen'; }

  ngOnInit() {
    console.log('Componente de agregar imagen cargado');
    this.image = new Image('', '', '');
  }

  onSubmit() {
    this.route.params.forEach((params: Params) => {
      // aqui hace una comparacion de los parametros
      const albumID = params['album'];
      this.image.album = albumID;
      this.imageService.saveImage(this.image)
        .subscribe(result => {
          // success
          console.log(result);
          if (!result.image) {
            alert('Error en el servidor');
          } else {
            this.image = result.image;
            this.router.navigate(['/imagen/editar/', result.image._id]);
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
