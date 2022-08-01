import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  urlEdu = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }

  public traer():Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.urlEdu + 'traer');
  }
  public detail(id: number):Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.urlEdu + `traer/${id}`);
  }
  public save(educacion: Educacion):Observable<any> {
    return this.httpClient.post<any>(this.urlEdu + 'crear', educacion);
  }
  public update(id: number, educacion: Educacion):Observable<any> {
    return this.httpClient.put<any>(this.urlEdu + `editar/${id}`, educacion);
  }
  public delete(id: number):Observable<any> {
    return this.httpClient.delete<any>(this.urlEdu + `eliminar/${id}`);
  }
}
