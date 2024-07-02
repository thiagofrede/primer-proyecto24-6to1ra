import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

//importamos el router, auth y firestore servicio
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {
  hide = true

  //Crear una coleccion para usuarios
  /*coleccionUsuariosLocales: Usuario[] = [];


  constructor() {


    this.coleccionUsuariosLocales = [
      {
        uid: '',
        nombre: 'santiago',
        apellido: 'perez',
        email: 'santiago@gmail.con',
        password: '1234',
        rol: 'vis',
      },
      {
        uid: '',
        nombre: 'santiago',
        apellido: 'doune',
        email: 'santiagodoune@gmail.con',
        password: '1224134',
        rol: 'visor',
      },
      {
        uid: '',
        nombre: 'tiago',
        apellido: 'perez',
        email: 'tiago1232@gmail.con',
        password: '1234asa',
        rol: 'visco',
      }

    ]


}*/

constructor(
  public serviceauth: AuthService,
  public servicioFirestore: FirestoreService,
  public servicioRutas: Router
){
  
}

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: '',
  }
  //Funcion para el inicio de sesion
  async iniciosesion() {
    /*
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      password: this.usuarios.password,
      rol: this.usuarios.rol
    }
    //repetitiva para recorrer la coleccion de usuarios local
    for (let i = 0; i < this.coleccionUsuariosLocales.length; i++) {
      //Usuario
      const usuariolocal = this.coleccionUsuariosLocales[i]


      //condicional para verificat la existencia ddel usuario ingresado
      if (usuariolocal.nombre == credenciales.nombre && credenciales.apellido === usuariolocal.apellido && usuariolocal.email
        === credenciales.email && usuariolocal.password == credenciales.password && usuariolocal.rol == credenciales.rol && usuariolocal.rol === credenciales.uid
      ) {
        alert("¡ingresaste con exito! :");
        break;
      } else {
        alert("usuario incorrecto");
        break;
      }
    }
    //enviamos los nuevos datos de inicio de sesion por medio del metodo push a la coleccion
    this.coleccionUsuariosLocales.push(credenciales);

    //por consola
    console.log(credenciales);
    console.log(this.coleccionUsuariosLocales);*/
    this.limpiarinputs();
    const credenciales ={
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    try{
      //obteber usuario de BD
      const usuarioBD = await this.serviceauth.obtenerUsuario(credenciales.email);
      if(!usuarioBD || usuarioBD.empty){
        alert("correo electronico no esta registrado");
      this.limpiarinputs();
      return;
      }
      
    
        const usuarioDoc = usuarioBD.docs[0];

        const usuarioData = usuarioDoc.data() as Usuario;

        const hashedPassword = CryptoJS.SHA256(credenciales.password).toString()

    
    if(hashedPassword !== usuarioData.password){
      alert("contraseña incorrecta");
      this.usuarios.password = '',
      return;
    }
    const res = await this.serviceauth.IniciarSesion(credenciales.email, credenciales.password)
    .then(res=>{
      alert('se pudo ingresar con exito');

      this.servicioRutas.navigate(['/inicio'])
    })
    .catch(err =>{
      alert('hubo un problema al iniciar sesion:')

      this.limpiarinputs
    })
    catch(error) {
      this.limpiarimputs()
    }
  }
  
  limpiarinputs() {
    /**
     
     */
    const input = {
      uid: this.usuarios.uid = "",
      nombre: this.usuarios.nombre = "",
      apellido: this.usuarios.apellido = "",
      email: this.usuarios.email = "",
      password: this.usuarios.password = "",
      rol: this.usuarios.rol
    }
  }
}


