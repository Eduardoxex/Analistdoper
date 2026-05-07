import { Routes } from '@angular/router';
import {Login} from './login/login';

export const routes: Routes = [
    { path:'pgPrincipal', loadComponent: () => import('./pg-principal/pg-principal').then(m => m.PgPrincipal) },
    {path: 'login', component: Login},
    {path: 'operaciones', loadComponent: () => import('./operaciones/operaciones').then(m => m.Operaciones)},
    {path: '', redirectTo: 'pgPrincipal', pathMatch: 'full'},
    {path: 'registro', loadComponent: () => import('./registro/registro').then(m => m.Registro)}
];
