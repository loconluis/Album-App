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
  filesToUpload: Array<File>;
  resultUpload;

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

  onSubmit() {
    this.route.params.forEach((params: Params) => {
      // aqui hace una comparacion de los parametros
      const id = params['id'];

      this.imageService.editImage(id, this.image)
        .subscribe(result => {
          // success
          console.log(result);
          if (!result.imageUpdate) {
            alert('Error en el servidor');
          } else {
            this.image = result.imageUpdate;
            // subir imagen en esta parte es una promesa
            this.makeFileRequest(this.imageService.getUrl() + 'upload-image/' + id , [], this.filesToUpload)
              .then(resolve => {
                this.resultUpload = resolve;
                this.image = this.resultUpload.imageUpdate;
                this.router.navigate(['/album', this.image.album]);
              },
              reject => { console.log(reject); }
            );
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

  fileChangeEvent(fileInput: any) {
    // evento para escuchar el evento que cambia el input a change
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append('image', files[i], files[i].name);
      }

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }

}
