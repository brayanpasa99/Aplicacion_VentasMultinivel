import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:3000/"

  getLogin(body): Observable<any> {
    console.log("Iniciando sesión");
    return this.http.post<any>(this.URL + "getClient", body);
  }

  updatePassword(body): Observable<any> {
    console.log("Cambiando contraseña");
    return this.http.put<any>(this.URL + "updatePassword", body);
  }
}
