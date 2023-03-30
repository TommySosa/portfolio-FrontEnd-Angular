import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectos: Proyectos[] = [];
  constructor(private sProyectos: ProyectosService, private tokenService: TokenService) {

  }

  isLogged = false;
  ngOnInit(): void {
    this.cargarProyectos();
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
  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(
      data =>{
        this.proyectos = data;
      }
    )
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
          this.sProyectos.delete(id).subscribe(
            data => {
              this.cargarProyectos();
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
