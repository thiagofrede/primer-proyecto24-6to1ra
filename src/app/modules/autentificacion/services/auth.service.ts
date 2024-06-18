import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

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
}
