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
}
