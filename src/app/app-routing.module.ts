import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { CapacitacionesComponent } from './components/capacitaciones/capacitaciones.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'hard-skills', component: HardSkillsComponent },
  { path: 'sobre-mi' , component: SobreMiComponent},
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'soft-skills' , component: SoftSkillsComponent},
  { path: 'capacitaciones', component: CapacitacionesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
