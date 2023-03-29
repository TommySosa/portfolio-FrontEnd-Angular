import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillsService } from 'src/app/services/hard-skills.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-hardskills',
  templateUrl: './edit-hardskills.component.html',
  styleUrls: ['./edit-hardskills.component.css']
})
export class EditHardskillsComponent implements OnInit{
  Hskill : HardSkills = null;

  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder,private sHard: HardSkillsService, private activatedRouter: ActivatedRoute, 
    private router: Router, private imageService: ImageService) {
      this.formulario = new FormGroup({
        nombre: new FormControl(),
        porcentaje: new FormControl(),
  
      });
    }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHard.detail(id).subscribe(
        data => {
          this.Hskill = data;
        }, err =>{
          alert("Error al modificar la Hard-Skill");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate() : void {
      const { nombre, porcentaje } = this.formulario.value;
      this.Hskill = this.formulario.value;
      if(this.imageService.url != "") {
        this.Hskill.img = this.imageService.url;
      }
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHard.update(id, this.Hskill).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la Skill");
          this.router.navigate(['']);
        }
      )
    }
    uploadImage($event:any): void {   
      this.imageService.clearURL();
        const randomString = Math.random().toString(36).substring(2, 17);
        const name = "hardskill_" + randomString;
        this.imageService.uploadImage($event, name);
    }
}
