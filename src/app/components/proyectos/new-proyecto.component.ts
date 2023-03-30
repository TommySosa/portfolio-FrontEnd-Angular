import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/services/image.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  formulario: FormGroup;
  proy : Proyectos = null;
  constructor(private formBuilder:FormBuilder,private sProyectos: ProyectosService, private router: Router,public imageService:ImageService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      linkUrl: new FormControl(),
      githubUrl: new FormControl(),
      img: new FormControl()
    });
  }
  ngOnInit(): void {
    this.imageService.clearURL(); 
  }
  uploadImage($event:any): void {   
    this.imageService.clearURL();
      const randomString = Math.random().toString(36).substring(2, 17);
      const name = "proyectos_" + randomString;
      this.imageService.uploadImage($event, name);
  }
  onCreate(): void {
    this.proy = this.formulario.value;
    if(this.imageService.url != "") {
      this.proy.img = this.imageService.url;
    }
    const proyecto = new Proyectos(this.proy.nombre, this.proy.descripcion,this.proy.linkUrl, this.proy.githubUrl, this.proy.img);
    
    this.sProyectos.save(proyecto).subscribe(data => {
      alert("Proyecto añadida con éxito.");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
