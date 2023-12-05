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
  
  validarCampo(valor:string):boolean{
    const text=/^[A-Za-z Á-Úá-úñÑ]{3,20}/;
    return text.test(valor)
  }
  validarCampo2(valor:string):boolean{
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   return regexEmail.test(valor)
  }
  validarCampo3(valor:string):boolean{
    const  regexPassword= /^[A-Za-z Á-Úá-úñÑ0-9]{3,20}/;
    return regexPassword.test(valor)
  }
  

  createUser(){
    const name1=document.getElementById('name') as HTMLInputElement
    const lastname1=document.getElementById('lastname') as HTMLInputElement
    const email1= document.getElementById('email') as HTMLInputElement
    const password1=document.getElementById('password') as HTMLInputElement
    
    if(this.name == '' || this.lastname == '' || this.email =='' || this.password ==''){
      alert("los campos no estan llenos :3")
    }else if(!this.validarCampo(name1.value)){
      alert('El nombre es muy corto ')
    }else if(!this.validarCampo(lastname1.value)){
      alert('El apellido es muy corto ')
    }else if (!this.validarCampo2(email1.value)){
      alert('el correo no es valido')
    }else if(!this.validarCampo3(password1.value)){
      alert('la contraseña no es valido')
    }
    else{
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
