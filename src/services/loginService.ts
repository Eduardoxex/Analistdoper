import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  url: string = 'http://localhost:3000/api/autentificacion/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {

    return this.http.post(this.url, { username, password }).pipe(
      tap((response: any) =>{

        if(response.status === 'ok' && response.token){
          localStorage.setItem('token', response.token);
          localStorage.setItem('userData', JSON.stringify(response.data));
        }

      })

    );

    

  }

  logOut(): void{
    localStorage.removeItem('token');
  }


  revisarAutenticacion(): boolean{

    return !!localStorage.getItem('token');

  }

  
}
