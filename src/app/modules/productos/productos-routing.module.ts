import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from 'src/app/productos/productos.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { CollaresComponent } from './pages/collares/collares.component';
import { CasasComponent } from './casas/casas.component';

const routes: Routes = [
  {
    path:"producto", component:ProductosComponent
  },
  {
    path:"alimentacion", component:AlimentacionComponent
  },
  {
    path:"collares", component:CollaresComponent
  },
  {
    path:"casas", component:CasasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
