import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  URL = "http://localhost:3000/createClient"

  constructor(private http: HttpClient) { }

  postCliente(body): Observable<any> {
    console.log("POST", body, this.URL);
    return this.http.post<any>(this.URL, body);
  }
}
