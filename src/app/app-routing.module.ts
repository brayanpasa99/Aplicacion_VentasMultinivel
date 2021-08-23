import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';

const routes: Routes = [
  { 'path': '', redirectTo: '/lobby', pathMatch: 'full'},
  { 'path': 'lobby', component: LobbyComponent},
  { 'path': 'registrar-cliente', component: RegistrarClienteComponent},
  { 'path': '**', redirectTo: '/lobby', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
