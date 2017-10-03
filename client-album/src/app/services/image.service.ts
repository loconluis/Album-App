import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GLOBAL } from './config';

import { Image } from '../models/image.model';

@Injectable()
export class ImageService {
  url: string;

  constructor(
    private http: Http
  ) {
    this.url = GLOBAL.url;
  }

  getImages(albumID = null) {
    if (albumID == null) {
      return this.http.get(this.url + 'images/')
        .map(res => res.json());
    } else {
      return this.http.get(this.url + 'images/' + albumID)
      .map(res => res.json());
    }
  }

  getImage(id) {
    return this.http.get(this.url + 'image/' + id)
      .map(res => res.json());
  }

  saveImage(image: Image) {
    // guardar imagen
    const json = JSON.stringify(image);
    const params = json;
    const headers = new Headers({'Content-Type' : 'application/json'});

    return this.http.post(this.url + 'image', params, { headers: headers })
      .map(res => res.json());
  }

  editImage(id: string, image: Image) {
    // guardar imagen
    const json = JSON.stringify(image);
    const params = json;
    const headers = new Headers({'Content-Type' : 'application/json'});

    return this.http.put(this.url + 'image/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  deleteImage(id: string) {
    return this.http.delete(this.url + 'image/' + id)
      .map(res => res.json());
    }
  }

}
