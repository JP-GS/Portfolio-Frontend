import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  UrlPersona:String = 'http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

  public obtenerDatosPersona():Observable<Persona> {
    return this.http.get<Persona>(this.UrlPersona + 'traer/2');    
  }

  
}
