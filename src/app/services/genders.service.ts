import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GendersService {

  constructor(private http: HttpClient) {}

  getGenders(): Observable<any> {
    console.log("Servicio de géneros corriendo");
    return this.http.get<any>("../assets/data/generos.json");
  }
}
