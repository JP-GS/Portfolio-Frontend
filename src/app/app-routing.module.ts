import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { FormExpComponent } from './components/experiencia/form-exp.component';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'' , redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: IniciarSesionComponent},
  {path: 'nuevaExp', component: FormExpComponent},
  {path: 'nuevaEdu', component: NuevaEducacionComponent},
  {path: 'editarExp/:id', component: EditarExperienciaComponent},
  {path: 'editarEdu/:id', component: EditarEducacionComponent},
  // {path : "home"}
  // {path:'', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
