import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ParticulasComponent } from './components/particulas/particulas.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { CapacitacionesComponent } from './components/capacitaciones/capacitaciones.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgParticlesModule } from 'ng-particles';
import { } from "ng-particles";
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { CommonModule } from '@angular/common';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewestudiosComponent } from './components/estudios/newestudios.component';
import { EditEstudiosComponent } from './components/estudios/edit-estudios.component';
import { EditHardskillsComponent } from './components/hard-skills/edit-hardskills.component';
import { NewHardskillsComponent } from './components/hard-skills/new-hardskills.component';
import { EditInicioComponent } from './components/inicio/edit-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    SobreMiComponent,
    ParticulasComponent,
    EstudiosComponent,
    CapacitacionesComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    ExperienciaComponent,
    PortfolioComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewestudiosComponent,
    EditEstudiosComponent,
    EditHardskillsComponent,
    NewHardskillsComponent,
    EditInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    NgParticlesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
