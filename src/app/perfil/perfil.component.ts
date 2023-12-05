import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  lugar:String=''
  name: String = '';
  lastname: String = '';
  email: String = '';
  password: String = '';


  constructor(public router: Router){

  }
  botonPrueba(){
    this.listarDatos()
  }

  listarDatos(){
    this.name = localStorage.getItem("nombre") || '';
    this.lastname = localStorage.getItem("apellido") || '';
    this.email = localStorage.getItem("correo") || '';
    this.password = localStorage.getItem("constraseña") || '';
    
  }


  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/')
  }
  
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/dashboard')
  }
  navegar2(){
    console.log("hola mundo")
    this.router.navigateByUrl('/editar-perfil')
  }
  navegar3(){
    const regX =/"/g
    const lugar1 = this.lugar.replace(regX, "")
    if(this.lugar == ''){
      alert('no pusiste un lugar')
    }else if(this.lugar == 'Bogota' || this.lugar=='bogota'){
      console.log("hola mundo")
      this.router.navigateByUrl('/ofertas')

    }else{
      alert('no se encuentra esa capital')
    }
  }
}
