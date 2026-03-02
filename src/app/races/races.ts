import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Import de l'intercace City
import { City } from '../city';


@Component({
  selector: 'app-races',
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './races.html',
  styleUrl: './races.css',
})
export class Races implements OnInit {
  // Variables
  cities: City[] = [];
  city1: City = { name: 'Lyon' };
  city2: City = { name: 'London' };
  bgcolor1: string = 'bg-success bg-opacity-50';
  bgcolor2: string = 'bg-danger bg-opacity-50';
  textcolor1: string = 'text-success';
  textcolor2: string = 'text-danger';

  //Fonctions pour retourner la couleur du bg et du text en fonction de la ville
  getBgColor(city: City): string {
    if (city.name === 'Lyon') {
      return this.bgcolor1;
    } else if (city.name === 'London') {
      return this.bgcolor2;
    } else {
      return '';
    }
  }

  getTextColor(city: City): string {
    if (city.name === 'Lyon') {
      return this.textcolor1;
    } else if (city.name === 'London') {
      return this.textcolor2;
    } else {
      return '';
    }
  }
  //Initialisation de la liste des villes
  ngOnInit(): void {
    this.cities.push(this.city1);
    this.cities.push(this.city2);
  }
}
