export interface R1 {
  mensaje: string;
    user: User;
  }
  export interface R0 {
    users: Users;
  }
  
  
  export interface Users {
    users: User[];
  }
  
  
  export interface User {

    id:       number;
    nombres:string;
    apellidos:string;
    username: string;
    email:    string;
    password: string;
    password_confirmation: string;
   
  }
  export interface User2 {
    id:       number;
    nombres:string;
    apellidos:string;
    username: string;
    email:    string;
    password: string;
    password_confirmation: string;
  }
  
  export interface User3 {
    nombres:     string;
    apellidos: string;
    username: string;
    email: string;
  }
  export interface Userr{
    email:    string;
    password: string;
  }
