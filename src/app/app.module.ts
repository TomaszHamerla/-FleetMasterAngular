import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {Button} from "primeng/button";
import {FloatLabelModule} from "primeng/floatlabel";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import {DockModule} from "primeng/dock";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ToastService} from "./service/toast.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    PasswordModule,
    Button,
    FloatLabelModule,
    PaginatorModule,
    InputTextModule,
    DockModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
