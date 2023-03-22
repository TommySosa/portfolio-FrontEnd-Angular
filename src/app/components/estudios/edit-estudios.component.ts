import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit{
  estudios : Estudios = null;

  form: FormGroup;

  constructor(private formBuilder:FormBuilder,private sEstudios: EstudiosService, private activatedRouter: ActivatedRoute, 
    private router: Router) {
      this.form = new FormGroup({
        nombreE: new FormControl(),
        descripcionE: new FormControl(),
  
      });
    }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudios.detail(id).subscribe(
      data => {
        this.estudios = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() : void {
    const { nombreE, descripcionE } = this.form.value;
    this.estudios = this.form.value;
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudios.update(id, this.estudios).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
