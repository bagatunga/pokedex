import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexService } from '../../services/pokedex-service';
import { PokemonModel } from '../../model/pokemon';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.scss'
})

export class Pokemon implements OnInit {
  pokedex: PokemonModel[] = [];
  loading = true;
  error = '';

  dataSource = new MatTableDataSource<PokemonModel>([]);
  displayedColumns: string[] = ['number', 'name', 'type', 'weakness', 'description'];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getPokedex().subscribe( res => {
      this.dataSource.data = res.pokedex; 
    }
    );
  }
}
