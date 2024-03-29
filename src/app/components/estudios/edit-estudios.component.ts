import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/services/estudios.service';
import { ImageService } from 'src/app/services/image.service';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit{
  estudios : Estudios = null;

  form: FormGroup;

  constructor(private formBuilder:FormBuilder,private sEstudios: EstudiosService, private activatedRouter: ActivatedRoute, 
    private router: Router, public imageService:ImageService) {
      this.form = new FormGroup({
        nombreE: new FormControl(),
        descripcionE: new FormControl(),
        img: new FormControl()
  
      });
    }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudios.detail(id).subscribe(
      data => {
        this.estudios = data;
      }, err =>{
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() : void {
    //const { nombreE, descripcionE, img } = this.form.value;
    if(this.form.value){
      this.estudios = this.form.value;
    }
    if(this.imageService.url != "") {
      this.estudios.img = this.imageService.url;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudios.update(id, this.estudios).subscribe(
      data => {
        Swal.fire(
          'Operación exitosa!',
          'Estudio editado con exito!',
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
          text: 'Error al editar el estudio!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['']);
          }
        });
      }
    )
  }
  uploadImage($event:any): void {   
    this.imageService.clearURL();
      const randomString = Math.random().toString(36).substring(2, 17);
      const name = "estudios_" + randomString;
      this.imageService.uploadImage($event, name);
  }
}
