import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillsService } from 'src/app/services/hard-skills.service';

@Component({
  selector: 'app-edit-hardskills',
  templateUrl: './edit-hardskills.component.html',
  styleUrls: ['./edit-hardskills.component.css']
})
export class EditHardskillsComponent implements OnInit{
  Hskill : HardSkills = null;

  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder,private sHard: HardSkillsService, private activatedRouter: ActivatedRoute, 
    private router: Router) {
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
}
