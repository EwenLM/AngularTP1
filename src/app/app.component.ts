import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './Components/menu/menu';

@Component({
  selector: 'app-root',
  imports: [Menu, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pony Racer';
}
