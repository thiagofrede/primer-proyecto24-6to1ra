import { Injectable } from '@angular/core';
//cloud firestore -> accedemos a las colecciones
import{AngularFirestore, AngularFirestoreCollection}from '@angular/fire/compat/firestore';
import {Usuario} from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /*definimos de forma privada la coleccion de usuarios para que no sea accecible en toda la aplicacion.
  lo definimos como una coleccion de firestore que respete la estructura de nuestra interfaz 'Usuario'*/
private usuariosCollection: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {

    /*usuariosCollection va a definir la nueva coleccion 'usuarios' que estaran en nuestra base de datos*/ 
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
   }

   agregarUsuario(usuario:Usuario, id:string){
    /**/ 
  return new Promise(async (resolve, reject)=>{
    //bloque TRY encapsulala logica resuelta
    try{
      usuario.uid =id;

      /*
      *const resultado = coleccion de usuarios, envia como numero de documento el UID¨
      * y setea la informacion que ingresamos en el formulario  REGISTRO
       */
      const resultado = await this.usuariosCollection.doc(id).set(usuario);

      resolve (resultado);
    } catch(error){
      reject(error);
    }
   }) 
  }
}
