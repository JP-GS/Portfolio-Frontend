import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlPersona:String = 'https://portfoliojpgs.herokuapp.com/persona/';
  // urlPersona:String = 'http://localhost:8080/persona/';

  constructor(private httpClient: HttpClient) { }

  public obtenerDatosPersona():Observable<Persona> {
    return this.httpClient.get<Persona>(this.urlPersona + 'traer/1');    
  }

  public traer():Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.urlPersona + 'traer');
  }

  public getById(id: number):Observable<Persona> {
    return this.httpClient.get<Persona>(this.urlPersona + `traer${id}`);
  }
  public save(persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.urlPersona + 'crear', persona);
  }
  public update(id: number, persona: Persona):Observable<any> {
    return this.httpClient.put<any>(this.urlPersona + `editar/${id}`, persona);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlPersona + `eliminar/${id}`);
  }
}
