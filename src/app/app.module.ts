import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditSoftskillsComponent } from './components/soft-skills/edit-softskills.component';
import { NewSoftskillsComponent } from './components/soft-skills/new-softskills.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NewCapacitacionesComponent } from './components/capacitaciones/new-capacitaciones.component';
import { EditCapacitacionesComponent } from './components/capacitaciones/edit-capacitaciones.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
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
    EditInicioComponent,
    EditSoftskillsComponent,
    NewSoftskillsComponent,
    NewCapacitacionesComponent,
    EditCapacitacionesComponent,
    NewProyectoComponent,
    EditProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    NgParticlesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
