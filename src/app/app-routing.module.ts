import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'mensaje', component: MensajeComponent},
  {path:'login', component: IniciarSesionComponent},
  // {path : "home"}
  {path:'', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
