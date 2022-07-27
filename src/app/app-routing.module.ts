import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { FormExpComponent } from './components/experiencia/form-exp.component';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'' , redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: IniciarSesionComponent},
  {path: 'nuevaExperiencia', component: FormExpComponent},
  {path: 'editarExp/:id', component: EditarExperienciaComponent}
  // {path : "home"}
  // {path:'', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
