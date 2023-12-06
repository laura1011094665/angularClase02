import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-ofertas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-ofertas.component.html',
  styleUrl: './admin-ofertas.component.css'
})
export class AdminOfertasComponent {
  storageGlobal: String = ''
  NomEmp: String = ''
  Info: String = ''
  puesto: String = ''
  CantVan: String = ''

  crearOferta(){
  if(this.NomEmp == '' || this.Info == '' || this.puesto == '' || this.CantVan == ''){
    alert('los campos no estan llenos')
  }else{
    alert('registro completo')
    this.navegar2()
  }
}


  constructor(public router: Router){
    
  }
  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/')
  }
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/perfil')
  }

  navegar2(){
    console.log("hola mundo")
    this.router.navigateByUrl('/ofertas')
  }
  
  navegar3(){
    console.log("hola mundo")
    this.router.navigateByUrl('/dashboard')
  }
   
  navegar4(){
    console.log("hola mundo")
    this.router.navigateByUrl('/registrar-oferta')
  }
}
