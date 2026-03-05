import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


//Import de l'intercace City
import { City } from '../../city';
//Import du service Cities
import { Cities } from '../../Services/cities/cities';

@Component({
  selector: 'app-races',
  imports: [CommonModule, NgClass, RouterLink],
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
  private mysubscription: Subscription;


 //Nouvelle classe Subscription pour gérer les abonnements au service Cities
  constructor(private citiesService: Cities) {
    this.mysubscription = new Subscription();
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

   //Met à jour l'attribut de la ville en fonction de son état actuel
  onSwitch(index: number) {
    if (this.cities[index].attribut === 'Eteint') {
      this.citiesService.switchOnOne(index);
    } else if (this.cities[index].attribut === 'Allume') {
      this.citiesService.switchOffOne(index);
    }
  }


  // subscribe à l'Observable cities$ pour recevoir les mises à jour
  // Dernieres valeur obtenue avec BehaviorSubject
  // Plus besoin de emitCities, tout est dans le service
  ngOnInit(): void {
    this.mysubscription = this.citiesService.cities$.subscribe((cities: City[]) => {
      this.cities = cities;
    });
  }

  //Unsubscribe pour éviter les fuites de mémoire
  ngOnDestroy(): void {
    this.mysubscription.unsubscribe();
  }
}
