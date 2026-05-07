import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnviarMensajeService {

  url: string = 'http://localhost:3000/api/info/obtenerInfo';

  constructor( private httpf: HttpClient) {}

  enviarMensaje(informacion: any): Observable<any>{

    return this.httpf.post(this.url, informacion);
  }


  
}
