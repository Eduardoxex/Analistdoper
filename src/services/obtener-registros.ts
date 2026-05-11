import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ObtenerRegistros {
  private url: string = 'http://localhost:3000/api/operaciones/getAllAnalisis';
  private url2: string = 'http://localhost:3000/api/operaciones/getAnalisisById';
  private urldelte: string = 'http://localhost:3000/api/operaciones/deleteRegistro';
  private urlcapacidad: string = 'http://localhost:3000/api/operaciones/getAnalisisByCapacidad';
  private urlresultadofinal: string = 'http://localhost:3000/api/operaciones/getAnalisisByResultado';




    constructor( private http: HttpClient){
      
    }

    obtenerTodos(): Observable<any>{
        const resultado = this.http.get(this.url);
        return resultado;

    }

    obtenerById(id: number): Observable<any>{
      const body = {
        id: id
      }
        const resultado2 = this.http.post(this.url2, body);
        
        return resultado2;
    }

    delete(id: number): Observable<any>{
      const body = {
        id: id
      }

      const resultado = this.http.post(this.urldelte, body);
      return resultado;

    }

    obtenerPorCapacidad(capacidad: number): Observable<any>{
      const body = {
        capacidad
      }
      const respuesta = this.http.post(this.urlcapacidad, body);
      return respuesta;
    }

    obtenerPorResultadoFinal(resultado: string): Observable<any>{

      const body = {
        resultado
      }

      const respuesta = this.http.post(this.urlresultadofinal, body);
      return respuesta;

    }

  
}
