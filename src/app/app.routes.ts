import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Trips } from './trips/trips';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: Home },
    {path: 'trips', component: Trips}
];
