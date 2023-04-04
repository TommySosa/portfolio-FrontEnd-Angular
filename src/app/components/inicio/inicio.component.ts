import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import ScrollReveal from 'scrollreveal';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  persona: persona = null;
  
  constructor(public personaService: PersonaService,private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    ScrollReveal().reveal('.to-right', { 
      duration: 1500,
      delay: 0,
      distance: '150px',
      origin: 'right',
      opacity: 0,
      easing: 'ease',
      afterReveal: function (domEl) {
        domEl.classList.add('to-right');
      }

    });

  }
  downloadPDF() {
    const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/tomassosa-df065.appspot.com/o/CVActual_editado.pdf?alt=media&token=4c19c549-cb76-4a53-a54c-92d6e9b44bad'; // Reemplaza con la URL del archivo PDF que quieres descargar
    const pdfName = 'cv-tomassosa.pdf'; // Reemplaza con el nombre que quieres darle al archivo PDF
  
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = pdfName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
  }
  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data => {
        this.persona = data;
      }
    )
  }

  
}
