import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexService } from '../../services/pokedex-service';
import { PokemonModel } from '../../model/pokemon';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialog } from '../../core/confirm-dialog/confirm-dialog';
import { Modificar } from '../modificar/modificar';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatButtonModule,
    MatIconModule,
    MatTableModule,
    CommonModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.scss'
})

export class Pokemon implements OnInit {
  pokedex: PokemonModel[] = [];
  loading = true;
  error = '';

  dataSource = new MatTableDataSource<PokemonModel>();
  displayedColumns: string[] = ['number', 'name', 'type', 'weakness', 'description', 'action'];

  constructor(
    private pokedexService: PokedexService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.pokedexService.getPokedex().subscribe(
      res => this.dataSource.data = res.pokedex
    );
  }

  createPokemon() {
    const dialogRef = this.dialog.open(Modificar, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  editPokemon(pokemon: PokemonModel) {
    const dialogRef = this.dialog.open(Modificar, {
      data: { pokemon }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  deletePokemon(pokemon: PokemonModel) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      data: { title: "Eliminar pokemon", description: "¿Desea eliminar este pokemon?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pokedexService.deletePokedex(pokemon.id).subscribe(result => {
          this.ngOnInit();
        });
      }
    });
  }

}
