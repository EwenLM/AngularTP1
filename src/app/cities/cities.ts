import { Injectable } from '@angular/core';
import { City } from '../city';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Cities {

  citiesSubject = new Subject<City[]>();

  private cities: City[] = [
    { name: 'Lyon', attribut: 'Eteint' },
    { name: 'London', attribut: 'Allume' },
    { name: 'Paris', attribut: 'Eteint' },
    { name: 'New York', attribut: 'Allume' },
    { name: 'Tokyo', attribut: 'Eteint' },
    { name: 'Berlin', attribut: 'Allume' },
  ];

  //Methode pour changer l'attribut d'une ville
  switchOnOne(i: number) {
    this.cities[i].attribut = 'Allume';
  }
  switchOffOne(i: number) {
    this.cities[i].attribut = 'Eteint';
  }

  emitCities() {
    this.citiesSubject.next(this.cities.slice());
  }
}
