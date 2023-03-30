import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/services/image.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  proyecto : Proyectos = null;

  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder,private sHard: ProyectosService, private activatedRouter: ActivatedRoute, 
    private router: Router, private imageService: ImageService) {
      this.formulario = new FormGroup({
        nombre: new FormControl(),
        descripcion: new FormControl(),
        linkUrl: new FormControl(),
        githubUrl: new FormControl(),
        img: new FormControl()
  
      });
    }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHard.detail(id).subscribe(
        data => {
          this.proyecto = data;
        }, err =>{
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate() : void {
      this.proyecto = this.formulario.value;
      if(this.imageService.url != "") {
        this.proyecto.img = this.imageService.url;
      }
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHard.update(id, this.proyecto).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      )
    }
    uploadImage($event:any): void {   
      this.imageService.clearURL();
        const randomString = Math.random().toString(36).substring(2, 17);
        const name = "proyecto_" + randomString;
        this.imageService.uploadImage($event, name);
    }
}
