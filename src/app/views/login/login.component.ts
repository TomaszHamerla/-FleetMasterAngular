import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: any;
  password: any;
  passwordVisible: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  changeToRegisterForm() {
    this.router.navigate(['/register']);
  }
}
