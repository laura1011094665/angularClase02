import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
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
  
  navegar2(){
    console.log("hola mundo")
    this.router.navigateByUrl('/perfil')
  }
  navegar3(){
    console.log("hola mundo")
    this.router.navigateByUrl('/admin-ofertas')
  }
}
