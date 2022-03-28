import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComprarAutoComponent } from "../componentes/comprar-auto/comprar-auto.component";
import { FormUsuariosComponent } from "../componentes/form-usuarios/form-usuarios.component";
import { FormVehiculosComponent } from "../componentes/form-vehiculos/form-vehiculos.component";
import { HomeComponent } from "../componentes/home/home.component";
import { ListaVComponent } from "../componentes/lista-v/lista-v.component";
import { NosotrosComponent } from "../componentes/nosotros/nosotros.component";





const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'comprar-auto', component: ComprarAutoComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'form-usuarios', component: FormUsuariosComponent},
    {path: 'form-vehiculos', component: FormVehiculosComponent},

 // {path:'registro' c}

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutesModule {}