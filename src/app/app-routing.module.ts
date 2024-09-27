import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicBaseComponent } from './public-base/public-base.component';
import { LoginComponent } from './login/login.component';
import { PrivateBaseComponent } from './private-base/private-base.component';

const routes: Routes = [
  { path: 'login', component: PublicBaseComponent, children: [{ path: '', component: LoginComponent }] },
  { path: 'dashboard', component: PrivateBaseComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
