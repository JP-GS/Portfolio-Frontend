import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
proyecto : Proyecto = null;

  constructor(private proyectoService: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.getById(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert('Error al editar la educacion');
      this.router.navigate(['']);
      })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('Error al editar la educacion');
        this.router.navigate(['']);
      }
    )
  }

  onClose(): void {
    this.router.navigate(['']);
  }
}
