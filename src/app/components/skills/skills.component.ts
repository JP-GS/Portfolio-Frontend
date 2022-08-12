import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServiceService } from 'src/app/service/skill-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillList: Skill[] = [];
//Objeto para crear
  nombreSkill: string = '';
  imgSkill: string = '';
  porcentaje: number = 0;
//Variable para editar
  skill: Skill = null;
  constructor(private skillService: SkillServiceService, private tokenService: TokenService) { }
  isLogged= false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarSkill() {
    this.skillService.traer().subscribe(data => {this.skillList = data});
  }
  delete(id? : number) {
    if(id != undefined) {
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo eliminar");
        }
      )      
    }
  }
  
}
