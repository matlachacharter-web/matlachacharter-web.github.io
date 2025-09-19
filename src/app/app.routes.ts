import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Trips } from './trips/trips';
import { Gallery } from './gallery/gallery';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: Home },
    {path: 'trips', component: Trips},
    {path: 'gallery', component: Gallery}
];
