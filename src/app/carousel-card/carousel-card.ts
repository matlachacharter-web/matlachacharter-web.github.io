import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel-card',
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './carousel-card.html',
  styleUrl: './carousel-card.css',
  standalone: true,
})
export class CarouselCard {
  @Input() image: any;
  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;
  @Input() cId!: string;

  constructor(private router: Router) {}

  findTrip(trip: string) {
    console.log(trip);
    if(trip === '0') {
      console.log('1')
      this.router.navigate(['trips'], {fragment: 'tarpon'});
    }
    else if(trip === '1') {
      this.router.navigate(['trips'], {fragment: 'sunset'});
    }
    else if(trip === '2') {
      this.router.navigate(['trips'], {fragment: 'eco'});
    }
    else if(trip === '3') {
      this.router.navigate(['trips'], {fragment: 'family'});
    }
    else if(trip === '4') {
      this.router.navigate(['trips'], {fragment: 'inshore'});
    }
    else {
      console.log("basic")
      this.router.navigate(['trips']);
    }
  }
}
