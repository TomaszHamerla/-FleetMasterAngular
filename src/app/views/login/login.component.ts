import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "../../service/toast.service";

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
    private toastService: ToastService
  ) {
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  changeToRegisterForm() {
    this.router.navigate(['/register']);
  }

  login() {
    this.toastService.show();
  }
}
