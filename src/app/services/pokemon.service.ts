import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL: string = '';
  private pokemonData: PokemonData | any;

  constructor(private httpClient: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  getPokemonByName(pokemonName: string): Observable<PokemonData> {
    this.pokemonData = this.httpClient.get<PokemonData>(
      `${this.baseURL}${pokemonName}`
    );
    return this.pokemonData;
  }
}
