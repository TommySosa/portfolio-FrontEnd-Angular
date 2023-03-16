import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  IsLogged = false;


  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.IsLogged = true;
    }else{
      this.IsLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
