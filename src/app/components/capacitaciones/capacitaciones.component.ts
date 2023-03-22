import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit{

  constructor() {}
  ngOnInit(): void {
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
