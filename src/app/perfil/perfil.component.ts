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
  constructor(public router: Router){

  }
  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/')
  }
  
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/dashboard')
  }
}
