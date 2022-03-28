export interface R1 {
    mensaje: string;
      auto: Auto;
    }
    export interface R0 {
      autos: Autos;
    }
    
    export interface Autos {
      autos: Autos[];
    }
    
    export interface Auto {
      id : number;
      marca: number;
      modelo:number;
      tipo: number;
      color:number;
      transimicion: number;
      combustible: number;
      precio: number;
      kilometraje: number;
      puertas: number;
    }
    
    export interface Auto2 {
        marca: number; 
        modelo:number;
        tipo: number;
        color:number;
        transimicion: number;
        combustible: number;
        precio: number;
        kilometraje: number;
        puertas: number;
    }
  