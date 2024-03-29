import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkills } from 'src/app/model/soft-skills';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-softskills',
  templateUrl: './new-softskills.component.html',
  styleUrls: ['./new-softskills.component.css']
})
export class NewSoftskillsComponent {
  formulario: FormGroup;
  soft : SoftSkills = null;
  nombre: FormControl;
  porcentaje: FormControl;
  porcentajeView: number = 0;
  constructor(private formBuilder:FormBuilder,private sSoft: SoftSkillsService, private router: Router) {
     this.formulario = new FormGroup({
       nombre: new FormControl(),
       porcentaje: new FormControl()
     });
  }
  ngOnInit(): void {  
  }
  actualizarPorcentaje() {
    this.porcentajeView = Number((<HTMLInputElement>document.getElementById('porcentaje')).value);
  }
  onCreate(): void {
    this.soft = this.formulario.value;
    this.soft.porcentaje = this.porcentajeView;
    
    const softskill = new SoftSkills(this.soft.nombre, this.soft.porcentaje);
   
    this.sSoft.save(softskill).subscribe(data => {
      Swal.fire(
        'Operación exitosa!',
        'Soft-Skill añadida con éxito!',
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
        text: 'Error al agregar la Soft-Skill!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['']);
        }
      });
    })
  } 
}
