import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ComprarAutoComponent } from './componentes/comprar-auto/comprar-auto.component';
import { NavvComponent } from './componentes/navv/navv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SesionComponent } from './componentes/sesion/sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RoutesModule } from './Routes/routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarritoComponent,
    ComprarAutoComponent,
    NosotrosComponent,
    NavvComponent,
    SesionComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
