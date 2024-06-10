import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
// VISTAS DE AUTENTIFICACIÓN
import { RegistroComponent } from './page/registro/registro.component';
import { IniciosesionComponent } from './page/iniciosesion/iniciosesion.component';
// Componentes de material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

//Componentes Angular
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IniciosesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    //Angular
    FormsModule
  ],
  exports: [
    RegistroComponent,
    IniciosesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    //Angular
    FormsModule
  ]
})
export class AutentificacionModule { }