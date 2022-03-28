import { Component, OnInit } from '@angular/core';
import { Userr } from 'src/app/Models/usuers.response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 
  user!: Userr; 

  constructor(private fb:FormBuilder) { 
    this.createForm(); 
  }

  ngOnInit(): void {
  }

  login(){
    this.setUser(); 
    console.log(this.user);
  }

  createForm():void{
    this.loginForm = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]],
    })
  }

  setUser():void{
    this.user = {
      email : this.loginForm.get('email')?.value, 
      password : this.loginForm.get('password')?.value
    }
  }


}
