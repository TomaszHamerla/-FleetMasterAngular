import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "../../service/toast.service";
import {AuthService} from "../../service/auth.service";

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
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService
  ) {
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  changeToRegisterForm() {
    this.router.navigate(['/register']);
  }

  login() {
    this.authService.loginUser(this.username, this.password).subscribe({
      next: () => {
        this.toastService.show('Login successful')
      },
      error: (err) => {
      }
    });
  }
}
