import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive  } from '@angular/router';
import { Auth} from '../../Services/auth/auth';
import { Logout } from '../logout/logout';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, Logout, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor(@Inject(Auth) public auth: Auth) {
  }

 

}
