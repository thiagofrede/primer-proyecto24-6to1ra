import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {
  hide = true

  //Crear una coleccion para usuarios
  coleccionUsuariosLocales: Usuario[] = [];


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
  iniciosesion() {
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
    console.log(this.coleccionUsuariosLocales);
    this.limpiarinputs();
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


