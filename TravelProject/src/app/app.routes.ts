import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Consulta } from './components/consulta/consulta';
import { Formulario } from './components/formulario/formulario';
// import { Next } from './components/next/next';

export const routes: Routes = [

   {path: '', component: Home},
   {path: 'Consulta', component: Consulta},
   {path: 'Formulario', component: Formulario},

   {path: '**', component: Home},
   


];
