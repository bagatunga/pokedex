import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokedexService } from '../../services/pokedex-service';
import { PokemonModel } from '../../model/pokemon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './modificar.html',
  styleUrl: './modificar.scss'
})
export class Modificar implements OnInit {
  pokemon: PokemonModel;

  constructor(
    public dialogRef: MatDialogRef<Modificar>,
    @Inject(MAT_DIALOG_DATA) public data: { pokemon: PokemonModel },
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.pokemon = this.data?.pokemon ? Object.assign({}, this.data.pokemon) : new PokemonModel;
  }

  onSave() {
    this.pokedexService.savePokedex(this.pokemon).subscribe(() => {
      this.dialogRef.close();
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
