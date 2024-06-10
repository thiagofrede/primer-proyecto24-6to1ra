import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';


//FIREBASE__> IMPORTAMOS HERRAMOENITANTAS DE LA BASE DE DATOS
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';// trabaja con las colecciones de la informacion
import {AngularFireAuthModule} from '@angular/fire/compat/auth';//trabaja con la autentificacion
import {AngularFireStorageModule} from '@angular/fire/compat/storage';//trabaja con imagenes y archivos

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initialilizeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }