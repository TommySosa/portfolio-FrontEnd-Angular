import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import ScrollReveal from 'scrollreveal';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  persona: persona = null;
  
  constructor(public personaService: PersonaService,private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
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
  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data => {
        this.persona = data;
      }
    )
  }

  
}
