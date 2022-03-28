import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Users } from 'src/app/Models/usuers.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl; 

  constructor(private http : HttpClient) { }

  register(user:Users):Observable<any>{
    console.log(user); 
    return this.http.post(`${this.apiUrl}User`, user);
  }

  login(user:Users):Observable<any>{
    return this.http.post(`${this.apiUrl}login`, user);
  }
}
