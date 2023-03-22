import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  expe: Experiencia[] = [];


  constructor(private sExperiencia:SExperienciaService, private tokenService:TokenService) {

  }

  isLogged= false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    ScrollReveal().reveal('.to-right', { 
      duration: 1800,
      delay: 0,
      distance: '250px',
      origin: 'right',
      opacity: 0,
      easing: 'ease',
      afterReveal: function (domEl) {
        domEl.classList.add('to-right');
      }
  });
  }
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

  delete(id?: number): void {
    console.log("id: " + id);
    if(id != undefined ) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        },err =>{
          alert("No se pudo borrar la experiencia");
        }
      );
    }
  }
}
