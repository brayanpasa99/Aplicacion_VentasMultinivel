import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<any> {
    console.log("Servicio del menú corriendo");
    return this.http.get<any>("../assets/data/menu.json");
  }
}
