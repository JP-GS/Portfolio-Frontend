import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  persona: Persona = null;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.personaService.obtenerDatosPersona().subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al editar la ");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar la persona");
        this.router.navigate(['']);
      }
    )
  }

  onClose(): void {
    this.router.navigate(['']);
  }

}
