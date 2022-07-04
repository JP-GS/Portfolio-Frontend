import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "");
  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatosPersona().subscribe( data => {this.persona = data})
  }

}
