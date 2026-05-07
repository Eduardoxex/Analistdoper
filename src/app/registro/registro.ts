import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { throwError } from 'rxjs';
import {Router} from '@angular/router';
import {Registrarse} from '../../services/registrarse';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterLink ],
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro {

  constructor( private router: Router, private registrarse: Registrarse){}


  registrar(registroForm: NgForm){

    if (registroForm.valid) {

      if (registroForm.value.password !== registroForm.value.confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return;
      }

      if(!registroForm.value.email || !registroForm.value.name || !registroForm.value.password){
        alert('Por favor, completa todos los campos requeridos.');
        return;
      }

      if(registroForm.value.password.length < 8){
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
        
      }

    }

    try{

      console.log('El componente ha sido pulsado');

      this.registrarse.registrarUsuario(registroForm).subscribe(
       { 
        next: (response) =>{
          if(response.status === 'ok'){
            this.router.navigate(['/login']);
          }
        }

       }
      );


    }catch(error){
      alert('Ha ocurido un error: ' + error);
      console.log(error);
    }


  }

}
