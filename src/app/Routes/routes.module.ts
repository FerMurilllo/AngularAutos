import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComprarAutoComponent } from "../componentes/comprar-auto/comprar-auto.component";
import { HomeComponent } from "../componentes/home/home.component";
import { NosotrosComponent } from "../componentes/nosotros/nosotros.component";
import { RegistroComponent } from "../componentes/registro/registro.component";
import { SesionComponent } from "../componentes/sesion/sesion.component";

const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'comprar-auto', component: ComprarAutoComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'registro', component: RegistroComponent},
    {path:'sesion', component: SesionComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutesModule {}