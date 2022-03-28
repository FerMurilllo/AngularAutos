import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion/peticion.service';
import { User } from 'src/app/Models/usuers.response';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css'],
 
})
export class FormUsuariosComponent implements OnInit {

  error = false
  usuarios! :FormGroup;
  user!: User;
  constructor(private formBuilder:FormBuilder ,private peticion: PeticionService, private router: Router) { 

  }
  ngOnInit(): void {
    this.usuarios = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos : ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['',   [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required]
    })
  }
 
  send(){
    this.peticion.create(this.user).subscribe(
      respuesta =>{
          this.router.navigateByUrl('lista');
          alert(respuesta.mensaje)
      },
      error=>{
        this.error = true
        alert("Ha habido rror al procesar la solicitud")
      })

  }

}
