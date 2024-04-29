import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
//RUTAS HIJAS DEL MODULE
const routes: Routes = [
{
    path:"", component: InicioComponent
},
{
path:"inicio", component:InicioComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
