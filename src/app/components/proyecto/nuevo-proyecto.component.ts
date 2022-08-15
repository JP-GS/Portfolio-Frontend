import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  nombreP: string = '';
  imgP: string = '';
  descripcionP: string = '';
  urlP: string = '';

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombreP, this.imgP, this.descripcionP, this.urlP)
    this.proyectoService.save(proyecto).subscribe(
      data => {
        alert("Proyecto creado"); 
        this.router.navigate(['']);
      }, err => {
        alert("Falló la creacion del Proyecto");
        this.router.navigate(['']);
      }
      )
  }
  onClose(): void {
    this.router.navigate(['']);
  }

}
