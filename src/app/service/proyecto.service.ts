import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  urlProyecto = 'http://localhost:8080/proyecto/';
  // urlProyecto = 'https://portfoliojpgs.herokuapp.com/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public traer():Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.urlProyecto + 'traer');
  }
  public getById(id: number):Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.urlProyecto + `traer/${id}`);
  }
  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.urlProyecto + 'crear', proyecto);
  }
  public update(id: number, proyecto: Proyecto):Observable<any> {
    return this.httpClient.put<any>(this.urlProyecto + `editar/${id}`, proyecto);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlProyecto + `eliminar/${id}`);
  }
}
