import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { GryffComponent } from './vistas/gryff/gryff.component';
import { SlythComponent } from './vistas/slyth/slyth.component';
import { RavenComponent } from './vistas/raven/raven.component';
import { HuffComponent } from './vistas/huff/huff.component';
import { EstudiantesComponent } from './vistas/estudiantes/estudiantes.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { ProfesoresComponent } from './vistas/profesores/profesores.component';
import { MnuevoComponent } from './vistas/mnuevo/mnuevo.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full' },
  { path:'dashboard', component:DashboardComponent },
  { path:'gryff', component:GryffComponent },
  { path:'slyth', component:SlythComponent },
  { path:'raven', component:RavenComponent },
  { path:'huff', component:HuffComponent},
  { path:'estudiantes', component:EstudiantesComponent },
  { path:'nuevo', component:NuevoComponent },
  { path:'profesores', component:ProfesoresComponent },
  { path: 'mnuevo', component:MnuevoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [ DashboardComponent,GryffComponent,SlythComponent,RavenComponent,HuffComponent,EstudiantesComponent,NuevoComponent,ProfesoresComponent, MnuevoComponent ]
