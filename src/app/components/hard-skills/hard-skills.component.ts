import { Component } from '@angular/core';
import 'circle-progress';



@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent {
  getCircleImage(): string {
    return `
      <div class="circle-image-container">
        <img src="/assets/html-5.png" alt="Image">
      </div>
    `;
  }
  
}

