import { Injectable } from '@angular/core';
import { City } from '../../city';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cities {
  // BehaviorSubject privé pour stocker et émettre les villes
  private citiesSubject = new BehaviorSubject<City[]>([]);
  
  // Observable public pour les composants
  cities$: Observable<City[]> = this.citiesSubject.asObservable();

  private cities: City[] = [
    { name: 'Lyon', attribut: 'Eteint', caracteristique: 'Ville de la gastronomie' },
    { name: 'London', attribut: 'Allume', caracteristique: "Ville de l'histoire" },
    { name: 'Paris', attribut: 'Eteint', caracteristique: "Ville de l'art" },
    { name: 'New York', attribut: 'Allume', caracteristique: 'Ville du commerce' },
    { name: 'Tokyo', attribut: 'Eteint', caracteristique: 'Ville de la technologie' },
    { name: 'Berlin', attribut: 'Allume', caracteristique: 'Ville de la culture' },
  ];

  constructor() {
    // Émet la valeur initiale au démarrage du service
    this.emitCities();
  }

  //Methode pour changer l'attribut d'une ville
  switchOnOne(i: number) {
    this.cities[i].attribut = 'Allume';
    this.emitCities();  // Notification automatique
  }
  switchOffOne(i: number) {
    this.cities[i].attribut = 'Eteint';
    this.emitCities();  // Notification automatique
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
