import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCapacitacionesComponent } from './components/capacitaciones/edit-capacitaciones.component';
import { NewCapacitacionesComponent } from './components/capacitaciones/new-capacitaciones.component';
import { EditEstudiosComponent } from './components/estudios/edit-estudios.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { NewestudiosComponent } from './components/estudios/newestudios.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHardskillsComponent } from './components/hard-skills/edit-hardskills.component';
import { NewHardskillsComponent } from './components/hard-skills/new-hardskills.component';
import { EditInicioComponent } from './components/inicio/edit-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditSoftskillsComponent } from './components/soft-skills/edit-softskills.component';
import { NewSoftskillsComponent } from './components/soft-skills/new-softskills.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo:'portfolio', pathMatch:'full'},
  { path: 'nuevaexp', component : NewExperienciaComponent},
  { path: 'editexp/:id', component : EditExperienciaComponent},
  { path: 'nuevoest', component: NewestudiosComponent},
  { path: 'editest/:id', component : EditEstudiosComponent},
  { path: 'nuevahk', component: NewHardskillsComponent},
  { path: 'edithard/:id', component: EditHardskillsComponent},
  { path: 'editarinicio/:id' , component: EditInicioComponent},
  { path: 'nuevask', component: NewSoftskillsComponent},
  { path: 'editsoft/:id', component:EditSoftskillsComponent},
  { path: 'nuevacap', component: NewCapacitacionesComponent},
  { path: 'editcap/:id', component:EditCapacitacionesComponent},
  { path: 'nuevoproy', component: NewProyectoComponent},
  { path: 'editproy/:id', component:EditProyectoComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
