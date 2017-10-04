import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Image } from '../models/image.model';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html'
})
export class ImageEditComponent implements OnInit {
  titulo: string;
  image: Image;
  errorMessage: any;
  is_edit: boolean;

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Editar imagen';
    this.is_edit = true;
  }

  ngOnInit() {
    this.image = new Image('', '', '');
    console.log('Componente de editar imagen cargado');
    this.getImage();
  }

  getImage() {
    this.route.params.forEach((params: Params) => {
      const id = params['id'];

      this.imageService.getImage(id)
        .subscribe(result => {
          // success
          // console.log(result.image);
          this.image = result.image;
          if (!result.image) {
            this.router.navigate(['/']);
          }
        }, err => {
          this.errorMessage = <any>err;
          if (this.errorMessage != null) {
            console.log('Error', this.errorMessage);
          }
        });
    });
  }

}
