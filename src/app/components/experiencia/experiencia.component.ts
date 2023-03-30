import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import ScrollReveal from 'scrollreveal';
import Swal from 'sweetalert2';
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
      duration: 1500,
      delay: 0,
      distance: '150px',
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
  delete(id:number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás deshacer esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if( id != undefined){
          this.sExperiencia.delete(id).subscribe(
            data => {
              this.cargarExperiencia();
            }, err => {
              alert("No se pudo eliminar");
            }
          )
        }
        console.log('Elemento eliminado');
      }
    });
  }
}
