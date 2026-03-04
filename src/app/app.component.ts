import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './Components/menu/menu';
import { Login } from './Components/login/login';

@Component({
  selector: 'app-root',
  imports: [Menu, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pony Racer';
}
