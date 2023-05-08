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
        "titulo": "Os Vingadores",
        "diretor": "Joss Whedon",
        "origem" : "EUA",
        "cartaz" : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmkXsIZ89RVeyZkI_v3cLLB4MFd-KlVNXub-M16petJKffpZiw",
        "ano": 2012
      },
      {
        "titulo": "Os Vingadores - Era de Ultron",
        "diretor": "Joss Whedon",
        "origem" : "EUA",
        "cartaz" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRD559ar0kYM2Gp3E9xv1MUgwQ-O6n1Ytj8Vtr__EFsGofsuwWu",
        "ano": 2015
      },
      {
        "titulo": "Os Vingadores - Guerra Infinita",
        "diretor": "Anthony Russo, Joe Russo",
        "origem" : "EUA",
        "cartaz" : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4neC_Y4U1G6u2QlEFqbCizheGBUnZg1w874qWbIcVlv9tPuSu",
        "ano": 2018
      },
      {
        "titulo": "Os Vingadores - Ultimato",
        "diretor": "Anthony Russo, Joe Russo",
        "origem" : "EUA",
        "cartaz" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwtU95JygcmCq4e3XPpL9W0ATjGFoQCQm16dbpIp7BM36B7lH",
        "ano": 2019
      },
    ]
   }

   getFilmes(){
    return this.filmes;
   }
}
