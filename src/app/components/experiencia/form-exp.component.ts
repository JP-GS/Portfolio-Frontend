import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia-service';

@Component({
  selector: 'app-form-exp',
  templateUrl: './form-exp.component.html',
  styleUrls: ['./form-exp.component.css']
})
export class FormExpComponent implements OnInit {
 nombreExp: string = '';
 puesto: string = '';
 descripcion: string = '';
 imgExp: string = '';
 inicio: string = '';
 fin: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
onCreate():void{
  const expe = new Experiencia(this.nombreExp, this.puesto, this.descripcion, this.imgExp, this.inicio, this.fin);
  this.experienciaService.save(expe).subscribe(
    data => {
      alert("Experiencia creada"); 
      this.router.navigate(['']);
    }, err => {
      alert("Falló la creacion de la experiencia");
      // this.router.navigate(['']);
    }
    )
}
}
