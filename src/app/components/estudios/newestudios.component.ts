import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';
import { ImageService } from 'src/app/services/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newestudios',
  templateUrl: './newestudios.component.html',
  styleUrls: ['./newestudios.component.css']
})
export class NewestudiosComponent implements OnInit{
  formulario: FormGroup;
  est : Estudios = null;
  constructor(private formBuilder:FormBuilder,private sEstudios: EstudiosService, private router: Router,public imageService:ImageService) {
    this.formulario = new FormGroup({
      nombreE: new FormControl(),
      descripcionE: new FormControl(),
      img: new FormControl()
    });
  }
  ngOnInit(): void {
    this.imageService.clearURL(); 
  }
  uploadImage($event:any): void {   
    this.imageService.clearURL();
      const randomString = Math.random().toString(36).substring(2, 17);
      const name = "estudios_" + randomString;
      this.imageService.uploadImage($event, name);
  }
  onCreate(): void {
    if(this.formulario.value){
      this.est = this.formulario.value;
    }
    
    if(this.imageService.url != "") {
      this.est.img = this.imageService.url;
    }
    const expe = new Estudios(this.est?.nombreE, this.est?.descripcionE, this.est?.img);
    
    this.sEstudios.save(expe).subscribe(data => {
      Swal.fire(
        'Operación exitosa!',
        'Estudio añadido con exito!',
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
        text: 'Error al agregar el estudio!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['']);
        }
      });
    })
  }
}
