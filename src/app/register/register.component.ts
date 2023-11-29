import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  storageGlobal: String=''
  campo=''
  name:String=''
  lastname:String=''
  email:String=''
  password:String=''
  
  
  createUser(){
    if(this.name == '' || this.lastname == '' || this.email =='' || this.password ==''){
      alert("los campos no estan llenos :3")
    }else{
      alert("registro completo")
      this.navegar()
    }
  
  }

  constructor(public router:Router){

  }


  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/')
    localStorage.setItem('nombre', JSON.stringify(this.name))
    localStorage.setItem('apellido', JSON.stringify(this.lastname))
    localStorage.setItem('correo', JSON.stringify(this.email))
    localStorage.setItem('contraseña', JSON.stringify(this.password))
  }
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/dashboard')
  }


}
