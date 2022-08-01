import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  nombreEdu: string = '';
  titulo: string = '';
  carrera: string = '';
  imgEdu: string = '';
  inicio: string = '';
  fin: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const edu = new Educacion(this.nombreEdu, this.titulo, this.carrera, this.imgEdu, this.inicio, this.fin);
    this.educacionService.save(edu).subscribe(
      data => {
        alert("Educacion creada"); 
        this.router.navigate(['']);
      }, err => {
        alert("Falló la creacion de la educacion");
        this.router.navigate(['']);
      }
      )
  }
  onClose(): void {
    this.router.navigate(['']);
  }
}
