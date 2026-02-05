import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { PokemonModel } from '../model/pokemon';

@Injectable({ providedIn: 'root' })
export class PokedexService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getPokedex(): Observable<{ pokedex: PokemonModel[] }> {
        return this.http.get<{ pokedex: PokemonModel[] }>(this.baseUrl);
    }
    
}
