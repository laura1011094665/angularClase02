import { AdminOfertasComponent } from './admin-ofertas/admin-ofertas.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';

export const routes: Routes = [
    {path: '', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'ofertas', component:OfertasComponent},
    {path: 'perfil', component:PerfilComponent},
    {path: 'admin-ofertas', component:AdminOfertasComponent},
    {path: 'editar-perfil', component:EditarPerfilComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}
