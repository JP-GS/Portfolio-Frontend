import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = "http://localhost:8080/educacion/";

  constructor(private hhtp:HttpClient) { }

  public getEducacion():Observable<Educacion> {
    return this.hhtp.get<Educacion>(this.URL + 'traer/1')
  }
}
