import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  UrlPersona:String = 'http://localhost:8080/personas/';
  UrlEducacion:String = 'http://localhost:8080/educacion/';

  constructor(private http:HttpClient) { }

  public obtenerDatosPersona():Observable<Persona> {
    return this.http.get<Persona>(this.UrlPersona + 'traer/1');    
  }

  public obtenerDatosEdu():Observable<Educacion> {
    return this.http.get<Educacion>(this.UrlEducacion + 'traer');
  }
  
}
