import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  imports: [CurrencyPipe],
  templateUrl: './carousel-card.html',
  styleUrl: './carousel-card.css',
  standalone: true,
})
export class CarouselCard {
  @Input() image: any;
  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;
}
