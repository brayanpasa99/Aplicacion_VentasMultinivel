import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    console.log("Servicio de Productos corriendo")
    return this.http.get<Product[]>("../assets/data/producto_prueba.json");
  }
}
