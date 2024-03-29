import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia-service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exp: Experiencia[] = [];  

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged:boolean = false;
  show:boolean = true;
  
  ngOnInit(): void {    
    this.cargarExperiencia();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{  
    this.experienciaService.traer().subscribe(data => {this.exp = data}); 
  }
  delete(id? : number) {
  if(id != undefined) {
    this.experienciaService.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err => {
        alert("No se pudo eliminar la experiencia");
      }
    )
  }
 }
}
