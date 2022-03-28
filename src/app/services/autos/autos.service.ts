import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Auto2,R0,R1 } from 'src/app/Models/autos.response';

@Injectable({
  providedIn: 'root'
})
export class ServiService {

  apiUrl = environment.apiUrl; 

  constructor(private http : HttpClient) { }

getAll(){
  return this.http.get<R0>(`${this.apiUrl}Vehiculo`)
}

getOne(indice:any){
  return this.http.get<R1>(`${this.apiUrl}Vehiculo` + '/' + indice)
}

crear(info:Auto2){
  return this.http.post<R1>(`${this.apiUrl}Vehiculo`,info)
}

actualizar(indice:any, info:Auto2){
  return this.http.put<R1>(`${this.apiUrl}Vehiculo`+ '/' + indice, info)
}

eliminar(indice:any){
  return this.http.delete<R1>(`${this.apiUrl}Vehiculo`+'/'+indice)
}

}
