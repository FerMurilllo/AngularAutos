import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Auto } from 'src/app/Models/autos.response';
import { ServiService } from 'src/app/services/autos/autos.service'; 

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-form-vehiculos',
  templateUrl: './form-vehiculos.component.html',
  styleUrls: ['./form-vehiculos.component.css'],
  animations:  [
    trigger("ArribaAbajo", [
      state("void", style({
        transform: "translateY(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("AbajoArriba", [
      state("void", style({
        transform: "translateY(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("IzquierdaDerecha", [
      state("void", style({
        transform: "translateX(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("DerechaIzquierda", [
      state("void", style({
        transform: "translateX(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
  ],
})
export class FormVehiculosComponent implements OnInit {

  auto: Auto ={
    
    id:0,
    marca:0 ,
    modelo: 0,
    tipo: 0,
    color: 0,
    transimicion: 0,
    combustible: 0,
    precio: 0.00,
    kilometraje: 0,
    puertas: 0
  }
  error = false

  constructor(private peticion: ServiService, private router: Router ) { }

  ngOnInit(): void {
  }

  send(){
    this.peticion.crear(this.auto).subscribe(respuesta=>{
      this.router.navigateByUrl('lista');
      alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        alert("Error al procesar la solicitud")
      }
    )
  }

}
