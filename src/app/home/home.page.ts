import { Component } from '@angular/core';
import { Filme } from '../model/filme';
import { FilmeService } from '../service/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  filmes: Filme[];

  constructor(private filmeService: FilmeService) {
    this.filmes = this.filmeService.getFilmes();
  }

}
