import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentificationTypesService {

  constructor(private http: HttpClient) {}

  getIdentificationTypes(): Observable<any> {
    console.log("Servicio del tipos de identificacion corriendo");
    return this.http.get<any>("../assets/data/tipos_identificacion.json");
  }
}
