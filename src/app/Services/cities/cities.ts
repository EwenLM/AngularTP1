import { Injectable } from '@angular/core';
import { City } from '../../city';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) {
    // Émet la valeur initiale au démarrage du service
    this.emitCities();
  }

  //Methode pour changer l'attribut d'une ville
  switchOnOne(i: number) {
    this.cities[i].attribut = 'Allume';
    this.emitCities(); // Notification automatique
  }
  switchOffOne(i: number) {
    this.cities[i].attribut = 'Eteint';
    this.emitCities(); // Notification automatique
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

  saveCityToServer() {
    this.httpClient
      .put(
        'https://races-b599d-default-rtdb.europe-west1.firebasedatabase.app/cities.json',
        this.cities,
      )
      .subscribe(
        () => console.log('Enregistrement réussi !'),
        (error) => console.error("Erreur lors de l'enregistrement : ", error),
      );
  }

  getCitiesFromServer() {
    this.httpClient
      .get<City[]>('https://races-b599d-default-rtdb.europe-west1.firebasedatabase.app/cities.json')
      .subscribe(
        (cities) => {
          this.cities = cities;
          this.emitCities();
          console.log('Récupération des villes réussie !');
        },
        (error) => console.error('Erreur lors de la récupération des villes : ', error),
      );
  }
}
