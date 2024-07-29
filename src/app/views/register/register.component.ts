import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "../../service/toast.service";

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
    private toastService: ToastService
  ) {
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  changeToLoginForm() {
    this.router.navigate(['/login']);
  }

  register() {
    this.toastService.show();
  }
}
