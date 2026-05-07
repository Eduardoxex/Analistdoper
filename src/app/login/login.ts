import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { LoginService} from '../../services/loginService';

@Component({
  selector: 'app-login',
  imports: [FormsModule,  RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

   constructor( private router: Router, private loginService: LoginService){}

  logear(formInfo: NgForm){
    try{
      const { username, password } = formInfo.value;
      
      this.loginService.login(username, password).subscribe({
        next: (response) => {
          if(response.status === 'ok' && response.token){

      alert('Login exitoso: ' + response.token);
      this.router.navigate(['/operaciones']);
    }}});

    } catch (error) {
      alert('Error al intentar iniciar sesión:' + error);
      console.error('Error al intentar iniciar sesión:', error);
    } 
  }

}
