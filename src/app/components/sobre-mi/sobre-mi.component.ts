import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent{
  

  //persona: persona = new persona("","","");
  
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
  //    this.personaService.getPersona().subscribe(data => {this.persona = data})

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

}
