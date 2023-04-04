import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkills } from 'src/app/model/soft-skills';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-softskills',
  templateUrl: './edit-softskills.component.html',
  styleUrls: ['./edit-softskills.component.css']
})
export class EditSoftskillsComponent implements OnInit{
  skill : SoftSkills = null;
  porcentajeView : number= 0;

  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder,private sSoft: SoftSkillsService, private activatedRouter: ActivatedRoute, 
    private router: Router) {
      this.formulario = new FormGroup({
        nombre: new FormControl(),
        porcentaje: new FormControl(),
  
      });
    }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSoft.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err =>{
        alert("Error al modificar la Hard-Skill");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate() : void {
    this.skill = this.formulario.value;
    this.skill.porcentaje = this.porcentajeView;
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSoft.update(id, this.skill).subscribe(
      data => {
        Swal.fire(
          'Operación exitosa!',
          'Soft-Skill editada con éxito!',
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
          text: 'Error al editar la Soft-Skill!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['']);
          }
        });
      }
    )
  }

  actualizarPorcentaje() {
    this.porcentajeView = Number((<HTMLInputElement>document.getElementById('porcentaje')).value);
  }

}
