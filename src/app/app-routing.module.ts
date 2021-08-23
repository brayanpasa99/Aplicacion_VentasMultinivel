import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';

const routes: Routes = [
  { 'path': '', redirectTo: '/lobby', pathMatch: 'full'},
  { 'path': 'lobby', component: LobbyComponent},
  { 'path': '**', redirectTo: '/lobby', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
