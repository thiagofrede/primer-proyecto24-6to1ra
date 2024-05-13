import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { CollaresComponent } from './pages/collares/collares.component';
import { CasasComponent } from './casas/casas.component';


@NgModule({
  declarations: [
    ProductosComponent,
    AlimentacionComponent,
    CollaresComponent,
    CasasComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
