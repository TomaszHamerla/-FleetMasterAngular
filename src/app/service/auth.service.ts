import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {environment} from "../utils/environment";
import {ToastService} from "./toast.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private toast: ToastService
  ) {
  }

  loginUser(username: string, password: string): Observable<void> {
    const encodedCredentials = btoa(`${username}:${password}`);
    const basicAuthHeader = `Basic ${encodedCredentials}`;
    const headers = new HttpHeaders({
      'Authorization': basicAuthHeader
    });

      return this.httpClient.post<any>(`${environment.API_BASE_URL}/users/login`, {}, {headers})
      .pipe(
        map(response => {
          const token = response.token;
          localStorage.setItem('Token', token);

          const parts = token.split('.');
          const payload = parts[1];
          const userId = JSON.parse(atob(payload)).userId;
          localStorage.setItem('userId', userId);
        }),
        catchError(error => {
          this.toast.showError(error.error.message);
          return throwError(() => new Error('Login failed'));
        })
      );
  }

  registerUser(username: string, password: string, email: string){
    const user = {username, email, password};
   return this.httpClient.post<any>(`${environment.API_BASE_URL}/users`, user);
  }
}
