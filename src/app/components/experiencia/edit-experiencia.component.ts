import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  expLab : Experiencia = null;

  form: FormGroup;

  constructor(private formBuilder:FormBuilder,private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, 
    private router: Router) {
      this.form = new FormGroup({
        nombreE: new FormControl(),
        descripcionE: new FormControl(),
  
      });
    }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.details(id).subscribe(
      data => {
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() : void {
    const { nombreE, descripcionE } = this.form.value;
    this.expLab = this.form.value;
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        Swal.fire(
          'Operación exitosa!',
          'Experiencia editada con exito!',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['']);
          }
        });
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al editar la experiencia!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['']);
          }
        });
      }
    )
  }

}
