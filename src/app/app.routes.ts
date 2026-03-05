import { Routes } from '@angular/router';
import { Races } from './Components/races/races';
import { Singlerace } from './Components/singlerace/singlerace';
import { Login } from './Components/login/login';
import { AuthGuard } from './Services/auth.guard/auth.guard';
import { Form } from './Components/form/cityForm';


export const routes: Routes = [
    { path: '', component: Login },
    { path: 'races', component: Races, canActivate: [AuthGuard] },
    { path: 'races/:id', component: Singlerace, canActivate: [AuthGuard] },
    { path: 'form', component: Form, canActivate: [AuthGuard] }
];
