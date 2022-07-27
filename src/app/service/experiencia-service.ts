import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

urlExp = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public traer():Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.urlExp + 'traer');
  }
  public detail(id: number):Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.urlExp + `traer/${id}`);
  }
  public save(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.urlExp + 'crear', experiencia);
  }
  public update(id: number, experiencia: Experiencia):Observable<any> {
    return this.httpClient.put<any>(this.urlExp + `editar/${id}`, experiencia);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlExp + `eliminar/${id}`);
  }
}
