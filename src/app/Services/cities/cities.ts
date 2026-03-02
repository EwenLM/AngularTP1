import { Injectable } from '@angular/core';
import { City } from '../../city';

@Injectable({
  providedIn: 'root',
})
export class Cities {
    cities: City[] = [
    { name: 'Lyon', attribut: 'Eteint' },
    { name: 'London', attribut: 'Allume' },
    ];

    //Methode pour changer l'attribut d'une ville
    onSwitch(city: City): void {
        if (city.attribut === 'Eteint') {
            city.attribut = 'Allume';
        } else {
            city.attribut = 'Eteint';
        }
    }
}
