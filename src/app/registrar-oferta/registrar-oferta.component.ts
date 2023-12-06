import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-oferta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrar-oferta.component.html',
  styleUrl: './registrar-oferta.component.css'
})
export class RegistrarOfertaComponent {
  constructor(public router: Router){

  }

  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/')
  }
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/admin-ofertas')
  }
}
