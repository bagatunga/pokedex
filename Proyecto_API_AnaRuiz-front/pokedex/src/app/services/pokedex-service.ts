import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { PokemonModel } from '../model/pokemon';

@Injectable({ providedIn: 'root' })

export class PokedexService {

    constructor(private http: HttpClient) { }
    private baseUrl = environment.apiUrl;

    getPokedex(): Observable<{ pokedex: PokemonModel[] }> {
        return this.http.get<{ pokedex: PokemonModel[] }>(this.baseUrl);
    }

    savePokedex(pokemon: PokemonModel): Observable<any> {
        const id = pokemon.id;

        if (id) {
            return this.http.put(`${this.baseUrl}/${id}`, pokemon);
        }

        return this.http.post(this.baseUrl, pokemon);
    }

    deletePokedex(idPokemon: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${idPokemon}`);
    }
}

export { PokemonModel };
