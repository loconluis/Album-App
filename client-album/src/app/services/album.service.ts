import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GLOBAL } from './config';

import { Album } from '../models/album.model';

@Injectable()
export class AlbumService {
  url: string;

  constructor(private http: Http) {
    this.url = GLOBAL.url;
  }

  getAlbums () {
    return this.http.get(this.url + 'albums')
      .map(res => res.json());
  }


  getAlbum (id: string) {
    // obtiene el resultado
    return this.http.get(this.url + 'album/' + id)
      .map(res => res.json());
  }

  saveAlbum(album: Album) {
    const json = JSON.stringify(album);
    const params = json;
    const headers = new Headers({'Content-Type' : 'application/json'});

    return this.http.post(this.url + 'album', params, { headers: headers })
      .map(res => res.json());
  }

  editAlbum(id: string, album: Album) {
    const json = JSON.stringify(album);
    const params = json;
    const headers = new Headers({'Content-Type' : 'application/json'});

    return this.http.put(this.url + 'album/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  deleteAlbum(id: string) {
    return this.http.delete(this.url + 'album/' + id)
    .map(res => res.json());
  }

  getUploadApi() {
    return this.url + 'get-image/';
  }

}
