import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-newestudios',
  templateUrl: './newestudios.component.html',
  styleUrls: ['./newestudios.component.css']
})
export class NewestudiosComponent implements OnInit{
  formulario: FormGroup;
  constructor(private formBuilder:FormBuilder,private sEstudios: EstudiosService, private router: Router) {
    this.formulario = new FormGroup({
      nombreE: new FormControl(),
      descripcionE: new FormControl(),

    });
  }
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const { nombreE, descripcionE } = this.formulario.value;
    const expe = new Estudios(nombreE, descripcionE);
    
    this.sEstudios.save(expe).subscribe(data => {
      alert("Estudio añadido con éxito.");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
