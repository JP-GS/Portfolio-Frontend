import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList:any;
  
  constructor(public portfolioService: PortfolioService) { }
  
  ngOnInit(): void {
    this.portfolioService.obtenerDatosedu().subscribe(data => {this.educacionList = data}); 
      
  }

}
