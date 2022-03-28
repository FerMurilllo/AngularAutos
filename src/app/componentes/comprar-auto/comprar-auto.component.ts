import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiService } from 'src/app/services/autos/autos.service';
@Component({
  selector: 'app-comprar-auto',
  templateUrl: './comprar-auto.component.html',
  styleUrls: ['./comprar-auto.component.css']
})
export class ComprarAutoComponent implements OnInit {

  public vehiculos: any = []
  constructor(private peticion: ServiService, private router: Router) { }
  ngOnInit(): void {
    this.peticion.getAll().subscribe(respuesta=>{this.vehiculos = respuesta.autos});
    console.log(this.vehiculos)
  }
  leer(id:any){
    this.router.navigateByUrl('lista/'+id+'/detalles');
  }

}
