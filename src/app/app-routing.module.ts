import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEstudiosComponent } from './components/estudios/edit-estudios.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { NewestudiosComponent } from './components/estudios/newestudios.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHardskillsComponent } from './components/hard-skills/edit-hardskills.component';
import { NewHardskillsComponent } from './components/hard-skills/new-hardskills.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo:'portfolio', pathMatch:'full'},
  { path: 'nuevaexp', component : NewExperienciaComponent},
  { path: 'editexp/:id', component : EditExperienciaComponent},
  { path: 'nuevoest', component: NewestudiosComponent},
  { path: 'editest/:id', component : EditEstudiosComponent},
  { path: 'nuevahk', component: NewHardskillsComponent},
  { path: 'edithard/:id', component: EditHardskillsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
