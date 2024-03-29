import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "");
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  isNotLogged:boolean = true;
  isLogged:boolean = false;
  
  ngOnInit(): void {
    this.cargarPersona();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }
  cargarPersona() {
    this.personaService.obtenerDatosPersona().subscribe(data => {this.persona = data});
  }
}
