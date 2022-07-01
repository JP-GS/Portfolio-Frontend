import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url = 'http://localhost:8080/personas/traer/2'
  constructor(private http:HttpClient) { }
  
  obtenerDatos():Observable<any> {
    return this.http.get(this.url);
  }
}

