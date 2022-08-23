import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  // urlSkill = "http://localhost:8080/tecnologia/";
  urlSkill = "https://portfoliojpgs.herokuapp.com/tecnologia/";

  constructor(private  httpClient: HttpClient) { }

  public traer():Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.urlSkill + 'traer');
  }
  public getById(id: number):Observable<Skill> {
    return this.httpClient.get<Skill>(this.urlSkill + `traer/${id}`);
  }
  public save(skill: Skill):Observable<any> {
    return this.httpClient.post<any>(this.urlSkill + 'crear', skill);
  }
  public update(id: number, skill: Skill):Observable<any> {
    return this.httpClient.put<any>(this.urlSkill + `editar/${id}`, skill);
  }
  public delete(id: number):Observable<any> {
    return this.httpClient.delete<any>(this.urlSkill + `eliminar/${id}`);
  }
}
