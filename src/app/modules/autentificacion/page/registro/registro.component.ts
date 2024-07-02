import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

//imprranis servicio de autentificaccion

import { AuthService } from '../../services/auth.service';
//importamos componnetes de rutas de aangular

import { Route, Router } from '@angular/router';
import { throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js';

//importamos el firestoreservice
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  //Este "hide" es para el input de contraseña

  hide = true;

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ){}


  
  // Importacion del Modelo / Interfaz
  usuarios: Usuario= {
    uid:'',
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    rol:'',
  }
  
   //Crear una coleccion para usuarios
   coleccionUsuarios: Usuario[] = [];

      
     
     Limpiarinputs(){
      const input = {
        uid: this.usuarios.uid = "",
        nombre: this.usuarios.nombre = "",
        apellido: this.usuarios.apellido = "",
        email: this.usuarios.email = "",
        password: this.usuarios.password = "",
        rol: this.usuarios.rol
      }
    }













   //Funcion para el registro
   async registrar(){
       const credenciales = {
           email: this.usuarios.email,
           password: this.usuarios.password
       }
      
       const res = await this.servicioAuth.registrar(credenciales.email,credenciales.password)
       //metodo then devuelve algo si esta todo bien
       .then(res=>{
        alert("te registraste con exito")
        //el metodo navigate nos redirecciona a otra vista
        this.servicioRutas.navigate(['/inicio'])
       })
       //el metodo cath captura una falla y la devuelve cuando la promesa salga mal
       .catch(error =>{
        alert("hubo un error al registrar un nuevo usuario:")
       })


       const uid = await this.servicioAuth.obtenerUid();
       this.usuarios.uid =uid;
       this.guardarUsuario();
       //limpiamos a la funcion para guardar datos
       this.Limpiarinputs();

      
       //
//enviamos los nuevos registros por medio del metodo push a la coleccion
     
//

       
   }

   async guardarUsuario(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(err=>{
      console.log("error =>" +err)
    })
  }
  /*SHA256: es un algoritmo de hash seguro que toma una entrada(en este caso lo contrario)
  y produce una caddena de cracateres exadecimal que va a representar a su hash 
  toString: convierte el resultado en la cadena de caracteres legible */
    this.usuario.password = CryptoJS.SHA256(this.usuarios.password).toString();

  }
