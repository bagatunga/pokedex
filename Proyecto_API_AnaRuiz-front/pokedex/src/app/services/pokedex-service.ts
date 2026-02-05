import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { PokemonModel } from '../model/pokemon';

@Injectable({ providedIn: 'root' })

export class PokedexService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getPokedex() {
        return this.http.get<{pokedex: PokemonModel[]}>(this.baseUrl);
    }

    savePokedex(pokemon: PokemonModel): Observable<PokemonModel> {
        const { id } = pokemon;
        const url = id ? `${this.baseUrl}/${id}` : this.baseUrl;
        return this.http.put<PokemonModel>(url, pokemon);
    }

    deletePokedex(idPokemon: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${idPokemon}`);
    }
}

export { PokemonModel };
