import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

   private isAuth = false;

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
