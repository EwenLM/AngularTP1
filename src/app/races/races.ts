import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-races',
  imports: [],
  templateUrl: './races.html',
  styleUrl: './races.css',
})
export class Races implements OnInit {
  cities: City[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cities.push({ name: 'Lyon' });
    this.cities.push({ name: 'London' });
  }
}
