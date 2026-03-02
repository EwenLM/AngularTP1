import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import de l'intercace City
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
  color1: string = 'bg-success text-success';
  color2: string = 'bg-danger text-danger';
  color: string = '';

  //fonction pour changer la couleur en fonction de la ville
  changeColor(city: City) {
    if (city.name === 'Lyon') {
      this.color = this.color1;
    } else if (city.name === 'London') {
      this.color = this.color2;
    } else {
      this.color = '';
    }
  }
  //Initialisation de la liste des villes
  ngOnInit(): void {
    this.cities.push(this.city1);
    this.cities.push(this.city2);
  }
}
