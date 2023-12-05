import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent {
  storageGlobal:String='';
  name:String='';
  lastname:String='';
  email:String='';
  password:String='';


  constructor(public router: Router){

  }

  updateData(){
    const regX =/"/g
    
    const userName = localStorage.getItem("nombre")
    console.log(userName)
  
    const userNameParse =userName?.replace(regX, "")
    console.log(userNameParse)
    
    const userLastname = localStorage.getItem("apellido")
    console.log(userLastname)
  
    const userLastnameParse =userLastname?.replace(regX, "")
    console.log(userLastnameParse)

    const userEmail = localStorage.getItem("correo")
    console.log(userEmail)
  
    const userEmailParse =userEmail?.replace(regX, "")
    console.log(userEmailParse)


    const userPass= localStorage.getItem("contraseña")
    console.log(userPass)
    const userPassParse =userPass?.replace(regX,"")
    console.log(userPassParse)

  }

  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/')
  }
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/perfil')
  }
  navegar2(){
    
    console.log("hola mundo")
    this.router.navigateByUrl('/dashboard')
  }

}
