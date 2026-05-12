import { Component } from '@angular/core';
import { NavBar } from '../../componentes/nav-bar/nav-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajustes',
  imports: [NavBar],
  templateUrl: './ajustes.html',
  styleUrl: './ajustes.scss',
})
export class Ajustes {

  constructor(private router: Router){

  }

    info_usuario: any = localStorage.getItem('userData');
    name_use: any = JSON.parse(this.info_usuario);


    eliminarCuenta(user_user: number){

      const decicion = confirm("Estas seguro que deseas eliminar la cuenta?");

      if(decicion){
        this.router.navigate(['./pgPrincipal']);
      }else{
        return;
      }

    };

}
