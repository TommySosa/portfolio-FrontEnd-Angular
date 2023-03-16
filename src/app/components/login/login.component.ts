import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errorMsj: string;
  form: FormGroup;
  constructor(private formBuilder:FormBuilder, private tokenService: TokenService, private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      nombreUsuario: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),

    });
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  getNombreUsuario(){
    return this.form.get('nombreUsuario');
  }

  getPassword(){
    return this.form.get('password');
  }

  onLogin(event: Event):void{
    event.preventDefault();
    const { nombreUsuario, password } = this.form.value;
    this.loginUsuario = new LoginUsuario(nombreUsuario, password);
     this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      },err =>{
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsj = err.error.mensaje;
        console.log(this.errorMsj);

      })
  }
}




/*
export class LoginComponent implements OnInit{
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errorMsj: string;

  form:FormGroup;
  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {
    
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
     this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      },err =>{
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsj = err.error.mensaje;
        console.log(this.errorMsj);

      })
  }

}
*/