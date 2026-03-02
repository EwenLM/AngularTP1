import { Component } from '@angular/core';
import { Menu } from './menu/menu';
import { Races } from './races/races';
@Component({
  selector: 'app-root',
  imports: [Menu, Races],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pony Racer';
}
