import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  storageGlobal: String = '';
  email: String ='';
  password: String='';





  constructor(public router: Router){
    
  }

  validarCampo(valor: string ): boolean {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regexEmail.test(valor)
  }
  validarCampo1(valor:string ):boolean{
    const  regexPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regexPassword.test(valor)

  }


  saveData(){
    

    const regX =/"/g
    const userEmail = localStorage.getItem("correo")
    console.log(userEmail)
  
    const userEmailParse =userEmail?.replace(regX, "")
    console.log(userEmailParse)

    const userPass= localStorage.getItem("contraseña")
    console.log(userPass)
    const userPassParse =userPass?.replace(regX,"")
    console.log(userPassParse)
    const email1= document.getElementById('email') as HTMLInputElement;
    const password1= document.getElementById('password') as HTMLInputElement;
    if(!this.validarCampo(email1.value) ){
     alert('no es un correo valido')
    }else if(this.validarCampo1(password1.value)){
      alert('la contraseña no es valida')
    }else{
      if(this.email == '' || this.password == ''){
        alert('tienes que llenar los campos')
      } else if(this.email != userEmailParse || this.password!= userPassParse){
        alert('el usuario es incorrecto')
      }else if(this.email == userEmailParse || this.password == userPassParse){
        
      alert('bienvenido a Buscar Tu Trabajo Ideal')
      console.log(userEmail)

      this.navegar1()
      }
    }
  }



  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/register')
  }
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/dashboard')
  }
  getstoregeGlobal(){
    let texto = JSON.stringify( localStorage.getItem('campo'))
    console.log(texto)
    //this.storageGlobal=texto
  }

  
}

