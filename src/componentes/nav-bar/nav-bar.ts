import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/loginService';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {

  constructor(  private loginService: LoginService,
                private router: Router){}


  logOut(){

    this.loginService.logOut();
    this.router.navigate(['./login'])

  }

}
