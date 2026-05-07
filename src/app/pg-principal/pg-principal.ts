import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormComunication} from '../../componentes/form-comunication/form-comunication'



@Component({
  selector: 'app-pg-principal',
  imports: [RouterLink, FormComunication],
  templateUrl: './pg-principal.html',
  styleUrl: './pg-principal.scss',
})
export class PgPrincipal {

  procesarEnvio(datos: any) {
    console.log('El padre recibió estos datos:', datos);
    alert('Gracias ' + datos.nombre + ', el padre está procesando tu mensaje.');
    
    // Aquí es donde llamarías a tu 'enviarMen.enviarMensaje(datos)'
  }


}
