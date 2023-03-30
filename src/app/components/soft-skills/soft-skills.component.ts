import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { SoftSkills } from 'src/app/model/soft-skills';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit{
  skill: SoftSkills[] = [];

  constructor(private sSoft:SoftSkillsService, private token: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.token.getToken()){
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
  cargarSkills(): void {
    this.sSoft.lista().subscribe(
      data => {
        this.skill = data;
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
          this.sSoft.delete(id).subscribe(
            data => {
              this.cargarSkills();
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

