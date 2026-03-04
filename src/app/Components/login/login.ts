import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../Services/auth/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(public auth: Auth) {}

  login() {
    this.auth.login();
  }
}
