import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Import de l'intercace City
import { City } from '../../city';
//Import du service Cities
import { Cities } from '../../Services/cities/cities';

@Component({
  selector: 'app-races',
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './races.html',
  styleUrl: './races.css',
})
export class Races {
  // Variables
  cities: City[] = [];
  bgcolor1: string = 'bg-success bg-opacity-50';
  bgcolor2: string = 'bg-danger bg-opacity-50';
  textcolor1: string = 'text-success';
  textcolor2: string = 'text-danger';

  constructor(public citiesService: Cities) {
    this.cities = this.citiesService.cities;
  }

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

  onSwitch(index: number) {
    if (this.cities[index].attribut === 'Eteint') {
      this.citiesService.switchOnOne(index);
    } else if (this.cities[index].attribut === 'Allume') {
      this.citiesService.switchOffOne(index);
    }
  }
}
