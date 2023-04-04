import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Capacitacion } from 'src/app/model/capacitacion';
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { ImageService } from 'src/app/services/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-capacitaciones',
  templateUrl: './new-capacitaciones.component.html',
  styleUrls: ['./new-capacitaciones.component.css']
})
export class NewCapacitacionesComponent implements OnInit{
  formulario: FormGroup;
  capa : Capacitacion = null;
  constructor(private formBuilder:FormBuilder,private sCapacitacion: CapacitacionService, private router: Router,public imageService:ImageService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      periodo: new FormControl(),
      img: new FormControl()
    });
  }
  ngOnInit(): void {
    this.imageService.clearURL(); 
  }
  uploadImage($event:any): void {   
    this.imageService.clearURL();
      const randomString = Math.random().toString(36).substring(2, 17);
      const name = "capacitacion_" + randomString;
      this.imageService.uploadImage($event, name);
  }
  onCreate(): void {
    this.capa = this.formulario.value;
    if(this.imageService.url != "") {
      this.capa.img = this.imageService.url;
    }
    const capacitacion = new Capacitacion(this.capa.nombre, this.capa.periodo, this.capa.img);
    
    this.sCapacitacion.save(capacitacion).subscribe(data => {
      Swal.fire(
        'Operación exitosa!',
        'Capacitación añadida con éxito!',
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
        text: 'Error al agregar la capacitación!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['']);
        }
      });
    })
  }
}
