import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{
  estudios: Estudios[] = [];

  constructor(private estudiosS: EstudiosService, private tokenService: TokenService) {

  }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
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

  cargarEducacion(): void {
    this.estudiosS.lista().subscribe(
      data =>{
        this.estudios = data;
      }
    )
  }

  delete(id: number){
    if( id != undefined){
      this.estudiosS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
