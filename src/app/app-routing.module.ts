import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { 'path': '', redirectTo: '/login', pathMatch: 'full'},
  { 'path': 'lobby', component: LobbyComponent},
  { 'path': 'login', component: LoginComponent},
  { 'path': 'register-client', component: RegisterClientComponent},
  { 'path': 'cart', component: CartComponent},
  { 'path': '**', redirectTo: '/login', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
