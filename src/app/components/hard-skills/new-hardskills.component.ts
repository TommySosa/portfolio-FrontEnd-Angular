import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillsService } from 'src/app/services/hard-skills.service';

@Component({
  selector: 'app-new-hardskills',
  templateUrl: './new-hardskills.component.html',
  styleUrls: ['./new-hardskills.component.css']
})
export class NewHardskillsComponent implements OnInit{
  formulario: FormGroup;
  constructor(private formBuilder:FormBuilder,private sHard: HardSkillsService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      porcentaje: new FormControl(),

    });
  }
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const { nombre, porcentaje } = this.formulario.value;
    const hardskill = new HardSkills(nombre, porcentaje);
    
    this.sHard.save(hardskill).subscribe(data => {
      alert("Hard-Skill añadida con éxito.");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
