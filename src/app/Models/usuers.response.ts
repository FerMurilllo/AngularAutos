export interface R1 {
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
    nombre:string;
    apellidos:string;
    username: string;
    email:    string;
    password: string;
  }
  