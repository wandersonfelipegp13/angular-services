import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemonName: string = 'Nome do Pokemon';
  pokemonPhoto: string = '';
  pokemonTypes: string[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.pokemonPhoto == '') {
      this.pokemonPhoto = 'https://i.ibb.co/tYNpZTg/nopokemon.png';
    }
    if (this.pokemonTypes.length == 0) {
      this.pokemonTypes.push('Nenhum tipo informado');
    }
  }
}
