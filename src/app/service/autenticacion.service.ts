import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="../../assets/data/data.json";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log('El servicio de autenticacion esta corriendo...');
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  IniciarSesion(credenciales:any):Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data=> {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
}
