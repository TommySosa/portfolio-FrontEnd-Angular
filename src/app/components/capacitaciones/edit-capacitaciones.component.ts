import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacitacion } from 'src/app/model/capacitacion';
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { ImageService } from 'src/app/services/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-capacitaciones',
  templateUrl: './edit-capacitaciones.component.html',
  styleUrls: ['./edit-capacitaciones.component.css']
})
export class EditCapacitacionesComponent {
  capacitacion : Capacitacion = null;

  form: FormGroup;

  constructor(private formBuilder:FormBuilder,private sCapacion: CapacitacionService, private activatedRouter: ActivatedRoute, 
    private router: Router, public imageService:ImageService) {
      this.form = new FormGroup({
        nombre: new FormControl(),
        descripcion: new FormControl(),
        img: new FormControl()
  
      });
    }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sCapacion.detail(id).subscribe(
      data => {
        this.capacitacion = data;
      }, err =>{

        this.router.navigate(['']);
      }
    )
  }

  onUpdate() : void {
    //const { nombreE, descripcionE } = this.form.value;

    if(this.form.value){
      this.capacitacion = this.form.value;
    }
    
    if(this.imageService.url != "") {
      this.capacitacion.img = this.imageService.url;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.sCapacion.update(id, this.capacitacion).subscribe(
      data => {
        Swal.fire(
          'Operación exitosa!',
          'Capacitación editada con éxito!',
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
          text: 'Error al editar la capacitación!',
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
      const name = "capacitacion_" + randomString;
      this.imageService.uploadImage($event, name);
  }
}
