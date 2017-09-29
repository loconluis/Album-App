import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  titulo: string;


  constructor() { }

  ngOnInit() {
    this.titulo = 'Lista de Albums';
    console.log('Lista de albums cargados!');
  }

}
