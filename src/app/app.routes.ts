import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Trips } from './trips/trips';
import { Gallery } from './gallery/gallery';
import { CaptainMeet } from './captain-meet/captain-meet';
import { License } from './license/license';
import { PineIsland } from './pine-island/pine-island';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: Home },
    {path: 'trips', component: Trips},
    {path: 'gallery', component: Gallery},
    {path: 'captain', component: CaptainMeet},
    {path: 'license', component: License},
    {path: 'pine-island', component: PineIsland}
];
