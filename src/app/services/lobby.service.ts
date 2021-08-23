import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any>{
    console.log("Servicio de Productos corriendo")
    return this.http.get<any>("../assets/data/producto_prueba.json");
  }
}
