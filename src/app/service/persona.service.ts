import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/personas/';
  URLedu = 'http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }

    public obtenerDatosPersona():Observable<Persona> {
      return this.http.get<Persona>(this.URL + 'traer/5');
  }

  public obtenerDatosedu():Observable<Educacion> {
    return this.http.get<Educacion>(this.URLedu + 'traer/3');
}
}
