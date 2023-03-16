import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo:'portfolio', pathMatch:'full'},
  { path: 'nuevaexp', component : NewExperienciaComponent},
  { path: 'editexp/:id', component : EditExperienciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
