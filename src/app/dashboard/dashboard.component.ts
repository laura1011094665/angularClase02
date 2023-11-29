
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(public router: Router){
    
  }
  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/')
  }
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/ofertas')
  }

  navegar2(){
    console.log("hola mundo")
    this.router.navigateByUrl('/perfil')
  }

}
