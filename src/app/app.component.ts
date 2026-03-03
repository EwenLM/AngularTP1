import { Component } from '@angular/core';
import { Menu } from './Components/menu/menu';
import { Races } from './Components/races/races';
@Component({
  selector: 'app-root',
  imports: [Menu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pony Racer';
}
