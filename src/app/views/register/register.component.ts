import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";
import {ToastService} from "../../service/toast.service";
import {AuthService} from "../../service/auth.service";

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
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService,
  ) {
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  changeToLoginForm() {
    this.router.navigate(['/login']);
  }

  register() {
    this.authService.registerUser(this.username, this.password, this.email).subscribe({
      next: () => {
        this.toastService.show('Register successful');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.toastService.showError(error.error.message);
      }
    })
  }
}
