import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  constructor(private http: HttpClient) { }

  postCliente(): Observable<any> {
    return this.http.post<any>("../assets", {});
  }
}
