import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { Capacitacion } from 'src/app/model/capacitacion';
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit{
  capacitacion: Capacitacion[] = [];

  constructor(private sCapacitacion: CapacitacionService, private tokenService: TokenService) {

  }
  isLogged = false;
  ngOnInit(): void {
    this.cargarCapacitacion();
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
  cargarCapacitacion(): void {
    this.sCapacitacion.lista().subscribe(
      data =>{
        this.capacitacion = data;
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
          this.sCapacitacion.delete(id).subscribe(
            data => {
              this.cargarCapacitacion();
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
