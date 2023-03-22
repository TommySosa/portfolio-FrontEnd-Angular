import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
    ScrollReveal().reveal('.to-right', { 
      duration: 3000,
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
