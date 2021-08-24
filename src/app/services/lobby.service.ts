import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  URL_PRODUCTOS="http://localhost:3000/getProducts"

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any>{
    console.log("Servicio de Productos corriendo")
    return this.http.get<any>(this.URL_PRODUCTOS);
  }
}
