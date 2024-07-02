import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../../shared/services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private servicioFirestore:AngularFirestore) { }

//funcion para registro
registrar(email:string, password:string){
  //retorna el valor que es creado con el metodo "createemail"
  return this.auth.createUserWithEmailAndPassword(email,password)
}


//funcion para iniciar sesion
IniciarSesion(email:string, password:string){
  //validar la informacion del usuario -> sabe si existe en la coleccion
  return this.auth.signInWithEmailAndPassword(email,password)
}


//funcion cerrar sesion
CerrarSesion(){
  return this.auth.signOut()
}


  async obtenerUid(){
    //nos va a generar una promesa y la constante la va a capturar
    const user = await this.auth.currentUser;

    /*
    si el usuario no respeta la estructura de la interaz /
    si tuvo problemas para el registro -> ej: mal internet */

    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }
  //Retomamos del servicio firestore de la coleccion de 'usuarios', buscamos una reerencia de los emails registrados
  //y lo compramos con lo que ingrese el usuario al iniciar sesion, y lo obtiene con '.get()'
  //lo vuelve promesa => da un resultado de RECHAZADO o RESUELTO
  obtenerUsuario(email:string){
    return this.servicioFirestore.collection('usuarios', ref =>ref.where('email','==',email)).get().toPromise();
  }
}
