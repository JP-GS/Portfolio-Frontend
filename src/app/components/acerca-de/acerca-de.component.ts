import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "");
  constructor(public portfolioService: PortfolioService, private tokenService: TokenService) { }

  isNotLogged = true;
  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isNotLogged = false;
    }else {
      this.isNotLogged = true;
    }
    this.portfolioService.obtenerDatosPersona().subscribe( data => {this.persona = data});
  }

}
