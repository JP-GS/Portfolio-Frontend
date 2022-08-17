import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilComponent } from './components/acerca-de/editar-perfil.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { FormExpComponent } from './components/experiencia/form-exp.component';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { EditarProyectoComponent } from './components/proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  {path:'' , redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: IniciarSesionComponent},
  {path:'editarPerfil/:id', component: EditarPerfilComponent},
  {path: 'nuevaExp', component: FormExpComponent},
  {path: 'editarExp/:id', component: EditarExperienciaComponent},
  {path: 'nuevaEdu', component: NuevaEducacionComponent},  
  {path: 'editarEdu/:id', component: EditarEducacionComponent},
  {path: 'nuevaSkill', component: NewSkillComponent},
  {path: 'editarSkill/:id', component: EditSkillComponent},
  {path: 'nuevoProyecto', component: NuevoProyectoComponent},
  {path: 'editarProyecto/:id', component: EditarProyectoComponent}
  // {path : "home"}
  // {path:'', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
