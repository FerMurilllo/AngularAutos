import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesModule } from './Routes/routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ComprarAutoComponent } from './componentes/comprar-auto/comprar-auto.component';
import { NavvComponent } from './componentes/navv/navv.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormUsuariosComponent } from './componentes/form-usuarios/form-usuarios.component';
import { FormVehiculosComponent } from './componentes/form-vehiculos/form-vehiculos.component';
import { OffCanvasBarComponent } from './componentes/off-canvas-bar/off-canvas-bar.component';
import { LoginComponent } from './componentes/auth/login/login/login.component';
import { RegisterComponent } from './componentes/auth/login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarritoComponent,
    ComprarAutoComponent,
    NosotrosComponent,
    NavvComponent,
    RegistroComponent,
    FormUsuariosComponent,
    FormVehiculosComponent,
    OffCanvasBarComponent,
    LoginComponent,
    RegisterComponent
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
