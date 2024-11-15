import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Token } from '../models/token.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,private router: Router) {}


  /*saveUser(inputData: User) :Observable <any>{

    return this.httpClient.post('http://localhost:8000/api/login',inputData);

  }
*/

  saveUser(credentials: { email: string, password: string }){

   this.httpClient.post<Token>('http://localhost:8000/api/login', credentials).subscribe((response)=>{
          localStorage.setItem("token",response.access_token);
          
          this.router.navigate(['/Etudiants']);
          return response;
    });
  }
  token = localStorage.getItem("token");

  private headers= new HttpHeaders().set(
    'Authorization',
    'Bearer '+ this.token 
  );
  logout(): Observable<any> {
    
    return this.httpClient.get('http://localhost:8000/api/logout', {headers: this.headers});

  }
 
  saveResgister(inputData: User):Observable <any>{

    return this.httpClient.post('http://localhost:8000/api/register',inputData);

  }
}
