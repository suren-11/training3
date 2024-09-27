import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private router: Router) { }
  email: string = '';
  password: string = '';
  error = false;
  login(email: string, password: string) {

    if (email === 'admin@gmail.com' && password === '123456') {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = true;
    }
  }
}
