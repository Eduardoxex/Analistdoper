import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class Registrarse {

   constructor( private http: HttpClient){}

  url: string = 'http://localhost:3000/api/autentificacion/registrar';

   registrarUsuario(info: NgForm): Observable<any>{

    const information ={
     correo: info.value.email, 
     contraseña: info.value.password, 
     nombre: info.value.name, 
     apellido: info.value.lastName, 
     nombre2: info.value.name2, 
     apellido2: info.value.lastName2, 
     ocupacion: info.value.ocupacion
    }

   return  this.http.post(this.url, information).pipe(
      tap((response: any) =>{

        if(response.status === 'ok' && response.token){
          localStorage.setItem('token', response.token);
        }
      })
    )

  }
  
}
