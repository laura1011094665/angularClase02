import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface daticos{
  name:String;
  lastname:String;
  email:String;
  password:String;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  storageGlobal: String=''
  campo=''

  createUser(){
    const name =(document.getElementById('name') as HTMLSelectElement).value
    const lastname =(document.getElementById('lastname') as HTMLSelectElement).value
    const email =(document.getElementById('email') as HTMLSelectElement).value
    const password =(document.getElementById('password') as HTMLSelectElement).value

    const newData={
      name:name,
      lastname:lastname,
      email:email,
      password:password  
    }
  
  }

  
  
  

  constructor(public router:Router){

  }




}
