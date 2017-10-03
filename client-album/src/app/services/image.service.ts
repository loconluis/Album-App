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

}
