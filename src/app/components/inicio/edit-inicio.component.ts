import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { EstudiosService } from 'src/app/services/estudios.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-inicio',
  templateUrl: './edit-inicio.component.html',
  styleUrls: ['./edit-inicio.component.css']
})
export class EditInicioComponent implements OnInit{
  persona : persona = null;
  nombre : string = "Tomi";
  form: FormGroup;

  constructor(private formBuilder:FormBuilder,private sPersona: PersonaService, private activatedRouter: ActivatedRoute, 
    private router: Router) {
      this.form = new FormGroup({
        nombreE: new FormControl(),
        descripcionE: new FormControl(),
  
      });
    }

  ngOnInit(): void {
    this.persona = this.form.value;
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate() : void {
    const { nombre, descripcion } = this.form.value;
    this.persona = this.form.value;
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any) {

  }
}
