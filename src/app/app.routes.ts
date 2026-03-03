import { Routes } from '@angular/router';
import { Races } from './Components/races/races';
import { Singlerace } from './Components/singlerace/singlerace';


export const routes: Routes = [
    { path: 'races', component: Races },
    { path: 'races/:id', component: Singlerace }
];
