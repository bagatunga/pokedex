import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,
    MatIconModule,
    MatTableModule,
    CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
