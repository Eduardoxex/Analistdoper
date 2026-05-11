import { Routes } from '@angular/router';
import {Login} from './login/login';
import {authGuard} from './guards/auth-guard';

export const routes: Routes = [
    { path:'pgPrincipal', loadComponent: () => import('./pg-principal/pg-principal').then(m => m.PgPrincipal) },
    {path: 'login', component: Login},
    {path: 'operaciones', 
    loadComponent: () => import('./operaciones/operaciones').then(m => m.Operaciones),
    canActivate: [authGuard]},
    {path: '', redirectTo: 'pgPrincipal', pathMatch: 'full'},
    {path: 'registro', loadComponent: () => import('./registro/registro').then(m => m.Registro)},
    {path: 'operaciones/reportes', 
    loadComponent: () => import('./reportes/reportes').then(m => m.Reportes),
    canActivate: [authGuard]},
    {path: 'operaciones/ajustes',
     loadComponent: () => import('./ajustes/ajustes').then(m => m.Ajustes),
    canActivate: [authGuard]}
];
