import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../models/details';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getAddedProducts(): Observable<Product[]>{
    console.log("Servicio de Details corriendo")
    return this.http.get<Product[]>("../assets/data/compras_prueba.json");
  }
}

