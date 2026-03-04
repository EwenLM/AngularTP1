import { Injectable } from '@angular/core';
import { City } from '../../city';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cities {
  citiesSubject = new Subject<City[]>();

  private cities: City[] = [
    { name: 'Lyon', attribut: 'Eteint', caracteristique: 'Ville de la gastronomie' },
    { name: 'London', attribut: 'Allume', caracteristique: "Ville de l'histoire" },
    { name: 'Paris', attribut: 'Eteint', caracteristique: "Ville de l'art" },
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

  //Methode pour récupérer une ville par son index
  getCityById(id: number): City {
    return this.cities[id];
  }

  addCity(name: string, attribut: string, caracteristique: string) {
    const cityObject = { name: '', attribut: '', caracteristique: '' };
    cityObject.name = name;
    cityObject.attribut = attribut;
    cityObject.caracteristique = caracteristique;
    this.cities.push(cityObject);
    this.emitCities();
  }

  emitCities() {
    this.citiesSubject.next(this.cities);
  }
}
