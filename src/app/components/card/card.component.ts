import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: PokemonData;

  constructor(private pokemonService: PokemonService) {
    this.pokemon = {
      id: '0',
      name: 'Pokemon Name',
      sprites: {
        front_default: 'https://i.ibb.co/tYNpZTg/nopokemon.png',
      },
      types: [],
    };
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonByName('pikachu').subscribe({
      next: (res) => {
        let name = res.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);

        this.pokemon = {
          id: res.id,
          name: name,
          sprites: {
            front_default: res.sprites.front_default,
          },
          types: res.types,
        };
      },
      error: (res) => console.log(res),
    });
  }
}
