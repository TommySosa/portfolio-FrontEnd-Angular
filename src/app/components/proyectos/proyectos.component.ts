import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
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
