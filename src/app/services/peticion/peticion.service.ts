import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { R1,R0,User2, User3  } from 'src/app/Models/usuers.response';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  public usuarios: any = []
  constructor(private http: HttpClient) {
  }
  urlBase = 'http://127.0.0.1:3333/User'
  getAll(){
    return this.http.get<R0>(this.urlBase)
  }
  getOne(indice:any){
    return this.http.get<R1>(this.urlBase+'/'+indice)
  }
  create(info:User2){
    console.log(info)
    return this.http.post<R1>(this.urlBase,info)
  }
  update(indice:any, info: User3){
    return this.http.put<R1>(this.urlBase+'/'+indice, info)
  }
  delete(indice:any){
    return this.http.delete<R1>(this.urlBase+'/'+indice)
  }
 
}
