import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductosComponent } from './productos/productos.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:"", component: InicioComponent
  }, 
  {
    path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//{ 
  //*path: "", component: AppComponent },
 //{ path: "menu", component: MenuComponent }, {
 // path: "productos", component: ProductosComponent* }