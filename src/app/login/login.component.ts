import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  storageGlobal: String = ''
  campo='';
  campo1='';


  constructor(public router: Router){
    
  }

  saveData(){
    let campito = this.campo;
    let campito1 = this.campo1;
    if(campito=== null && campito1  ===null){
      alert('los campos estan vacios')
    }else{
      
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

