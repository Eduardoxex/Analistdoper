import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import {EnviarMensajeService} from '../../services/enviar-mensaje-service'

@Component({
  selector: 'app-form-comunication',
  imports: [FormsModule],
  templateUrl: './form-comunication.html',
  styleUrl: './form-comunication.scss',
})
export class FormComunication {

  @Input() tituloFormulario: string = '';

  @Output() eventoOcurido = new EventEmitter<any>();

  
  constructor( private enviarMen: EnviarMensajeService){}

  
  infoEnviar: object = {
    nombre:'',
    email: '',
    mensaje: ''
  }

 enviarInformacionInteresado(info: NgForm){


  const infoEnviar = {
    nombre: info.value.name,
    email: info.value.email,
    mensaje: info.value.message
  }

  try{

    this.enviarMen.enviarMensaje(infoEnviar).subscribe({
      next: (response) =>{

    this.eventoOcurido.emit(response);

      }
    })


  }catch(error){
    alert('Nos hemos encontrado con un error: ' + error);
    console.log(error);
  }
}

}
