import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full'},
  {path:"login",component:LoginComponent},
  {path:"table",component:TableComponent},
  {path:"register",component:RegisterComponent},
  {path:"get",component:GetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
