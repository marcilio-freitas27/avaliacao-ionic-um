import { Injectable } from '@angular/core';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {
  filmes: Filme[];
  constructor() {
     this.filmes = [
      {
        "titulo": "teste",
        "diretor": "teste",
        "origem" : "teste",
        "cartaz" : "teste",
        "ano": 2020
      },
      {
        "titulo": "teste",
        "diretor": "teste",
        "origem" : "teste",
        "cartaz" : "teste",
        "ano": 2020
      },
      {
        "titulo": "teste",
        "diretor": "teste",
        "origem" : "teste",
        "cartaz" : "teste",
        "ano": 2020
      },
      {
        "titulo": "teste",
        "diretor": "teste",
        "origem" : "teste",
        "cartaz" : "teste",
        "ano": 2020
      },
    ]
   }

   getFilmes(){
    return this.filmes;
   }
}
