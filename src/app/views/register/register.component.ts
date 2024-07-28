import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: any;
  password: any;
  passwordVisible: boolean = false;
  email: any;

  constructor(
    private router: Router
  ) {
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  changeToLoginForm() {
    this.router.navigate(['/login']);
  }
}
