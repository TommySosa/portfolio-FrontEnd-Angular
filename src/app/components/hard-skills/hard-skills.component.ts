import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'circle-progress';
import ScrollReveal from 'scrollreveal';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillsService } from 'src/app/services/hard-skills.service';
import { ImageService } from 'src/app/services/image.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit{
  skill: HardSkills[] = [];


  constructor(private sHard: HardSkillsService, private token: TokenService, private imageService: ImageService, private activatedRouter: ActivatedRoute) {

  }

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
  

  getCircleImage(): string {
    return `
      <div class="circle-image-container">
        <img src="/assets/html-5.png" alt="Image">
      </div>
    `;
  }
  
  cargarSkills(): void {
    this.sHard.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }
  delete(id: number){
    if(id != undefined){
      this.sHard.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}

