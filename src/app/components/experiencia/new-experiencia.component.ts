import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombreE: string = '';
  descripcionE: string = '';
  form: FormGroup;
  constructor(private formBuilder:FormBuilder,private sExperiencia: SExperienciaService, private router: Router) {
    this.form = new FormGroup({
      nombreE: new FormControl(),
      descripcionE: new FormControl(),

    });
  }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const { nombreE, descripcionE } = this.form.value;
    const expe = new Experiencia(nombreE, descripcionE);
    
    this.sExperiencia.save(expe).subscribe(data => {
      Swal.fire(
        'Operación exitosa!',
        'Experiencia añadida con éxito!',
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
        text: 'Error al agregar la experiencia!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['']);
        }
      });
    })
  }

}
