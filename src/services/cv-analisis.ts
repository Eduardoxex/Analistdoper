import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvAnalisis {

  private url: string = 'http://localhost:3000/api/operaciones/analizarCv';

  constructor(private http: HttpClient){

  }


  analizarCv(textoCV: string, analista: string, descripcionPuesto: string ): Observable<any> {

    const inforEnviar = {
       textoCV, 
      analista, 
      descripcionPuesto 
    }
  

      const resultado =  this.http.post<any>(this.url, inforEnviar);
      return resultado;    

  }
  
}
