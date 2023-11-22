import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}
