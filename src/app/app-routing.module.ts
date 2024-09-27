import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicBaseComponent } from './public-base/public-base.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component: PublicBaseComponent, children:[{path:'', component: LoginComponent}]},
  {path:'**', redirectTo: '/login', pathMatch:'full'},
  {path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
