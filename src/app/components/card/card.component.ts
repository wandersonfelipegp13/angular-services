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

  @Input()
  pokemonSeach: string;

  constructor(private pokemonService: PokemonService) {
    this.pokemonSeach = '';
    this.pokemon = {
      id: '0',
      name: 'Pokemon Name',
      sprites: {
        front_default: 'https://i.ibb.co/tYNpZTg/nopokemon.png',
      },
      types: [
        {
          slot: 0,
          type: {
            name: '???',
          url: ''
          }
        }
      ],
    };
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.pokemonSeach != '') this.getPokemon(this.pokemonSeach);
  }

  getPokemon(pokemonName: string) {
    this.pokemonService.getPokemonByName(pokemonName).subscribe({
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
      error: (res) => console.log('not found'),
    });
  }
}
