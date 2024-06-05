import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  //Este "hide" es para el input de contraseña
  hide = true;
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
   //Funcion para el registro
   registrar(){
       const credenciales = {
           uid:this.usuarios.uid,
           nombre:this.usuarios.nombre,
           apellido:this.usuarios.apellido,
           email:this.usuarios.email,
           password:this.usuarios.password,
           rol:this.usuarios.rol
       }
//enviamos los nuevos registros por medio del metodo push a la coleccion
       this.coleccionUsuarios.push(credenciales);

       //por consola
       console.log(credenciales);
       
   }

}

