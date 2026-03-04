import { Routes } from '@angular/router';
import { Races } from './Components/races/races';
import { Singlerace } from './Components/singlerace/singlerace';
import { Login } from './Components/login/login';
import { AuthGuard } from './Services/auth.guard/auth.guard';


export const routes: Routes = [
    { path: '', component: Login },
    { path: 'races', component: Races, canActivate: [AuthGuard] },
    { path: 'races/:id', component: Singlerace, canActivate: [AuthGuard] },
];
