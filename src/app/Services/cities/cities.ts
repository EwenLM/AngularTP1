import { Injectable } from '@angular/core';
import { City } from '../../city';

@Injectable({
  providedIn: 'root',
})
export class Cities {
  cities: City[] = [
    { name: 'Lyon', attribut: 'Eteint', caracteristique: 'Ville de la gastronomie' },
    { name: 'London', attribut: 'Allume', caracteristique: 'Ville de l\'histoire' },
    { name: 'Paris', attribut: 'Eteint', caracteristique: 'Ville de l\'art' },
    { name: 'New York', attribut: 'Allume', caracteristique: 'Ville du commerce' },
    { name: 'Tokyo', attribut: 'Eteint', caracteristique: 'Ville de la technologie' },
    { name: 'Berlin', attribut: 'Allume', caracteristique: 'Ville de la culture' },
  ];

  //Methode pour changer l'attribut d'une ville
  switchOnOne(i: number) {
    this.cities[i].attribut = 'Allume';
  }
  switchOffOne(i: number) {
    this.cities[i].attribut = 'Eteint';
  }
}
