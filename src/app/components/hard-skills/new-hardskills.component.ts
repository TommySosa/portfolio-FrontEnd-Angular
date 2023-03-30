import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillsService } from 'src/app/services/hard-skills.service';
import { ImageService } from 'src/app/services/image.service';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-new-hardskills',
  templateUrl: './new-hardskills.component.html',
  styleUrls: ['./new-hardskills.component.css']
})
export class NewHardskillsComponent implements OnInit{
  formulario: FormGroup;
  hard : HardSkills = null;
  nombre: FormControl;
  porcentaje: FormControl;
  img: FormControl;
  imagesURLS : string[] = [];
  constructor(private formBuilder:FormBuilder,private sHard: HardSkillsService, private router: Router, private activatedRouter: ActivatedRoute,public imageService: ImageService, private storage: Storage) {
     this.formulario = new FormGroup({
       nombre: new FormControl(),
       porcentaje: new FormControl(),
       img: new FormControl()
     });
  }
  ngOnInit(): void {
    this.imageService.clearURL();  
  }
  
  uploadImage($event:any): void {   
    this.imageService.clearURL();
      const randomString = Math.random().toString(36).substring(2, 17);
      const name = "hardskill_" + randomString;
      this.imageService.uploadImage($event, name);
      console.log("El hard.img es 1 : " + this.hard.img)
    console.log("El img url es 1: " + this.imageService.url);
  }
  onCreate(): void {
    this.hard = this.formulario.value;
    if(this.imageService.url != "") {
      this.hard.img = this.imageService.url;
    }
    
    const hardskill = new HardSkills(this.hard.nombre, this.hard.porcentaje, this.hard.img);
   
    this.sHard.save(hardskill).subscribe(data => {
      alert("Hard-Skill añadida con éxito.");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
    //this.imageService.clearURL();
    //this.imagesURLS.push(this.imageService.url);
  } 
  
}
