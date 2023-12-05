
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  lugar:String=''
  
  constructor(public router: Router){
    
  }
  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/')
  }
  navegar1(){
    const regX =/"/g
    const lugar1 = this.lugar.replace(regX, "")
    if(this.lugar == ''){
      alert('no pusiste un lugar')
    }else if(this.lugar == 'Bogota' || this.lugar=='bogota'){
      console.log("hola mundo")
      this.router.navigateByUrl('/ofertas')

    }else{
      alert('no se encuentra esa capital')
    }
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
