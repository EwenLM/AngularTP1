import { Component } from '@angular/core';
import { Menu } from './menu/menu';
@Component({
  selector: 'app-root',
  imports: [Menu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pony Racer';
}
