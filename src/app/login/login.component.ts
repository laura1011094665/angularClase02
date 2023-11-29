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

    if(this.email == '' || this.password == ''){
      alert('tienes que llenar los campos')
    } else if(this.email != userEmailParse || this.password!= userPassParse){
      alert('el usuario es incorrecto')
    }else if(this.email == userEmailParse || this.password == userPassParse){
      alert('bienvenido a RopeMaker')
      console.log(userEmail)

      this.navegar1()
    }else{
      alert('error de voce')
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

