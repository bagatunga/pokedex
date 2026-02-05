import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pokemon } from './pages/pokemon/pokemon';
import { Modificar } from './pages/modificar/modificar';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'pokemon', component: Pokemon },
    { path: 'modificar', component: Modificar },
];