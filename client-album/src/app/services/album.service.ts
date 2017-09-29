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

}
