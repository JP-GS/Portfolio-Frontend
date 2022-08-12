import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServiceService } from 'src/app/service/skill-service.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreSkill: string = '';
  imgSkill: string = '';
  porcentaje: number = 0;

  constructor(private skillService: SkillServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Skill (this.nombreSkill, this.imgSkill, this.porcentaje);
    this.skillService.save(skill).subscribe(
      data => {
        alert("Skill creada"); 
        this.router.navigate(['']);
      }, err => {
        alert("Falló la creacion de la Skill");
        this.router.navigate(['']);
      }
      )
  }
  onClose(): void {
    this.router.navigate(['']);
  }

}
