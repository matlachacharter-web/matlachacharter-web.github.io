import { Component } from '@angular/core';
import { CarouselCard } from '../carousel-card/carousel-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, CarouselCard],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  standalone: true,
})
export class Carousel {
  public images = [
    'trip1.jpg',
    'trip2.jpg',
    'trip3.jpg',
    'trip4.jpg',
    'trip5.jpg'
  ];
  public titles = [
    'Private 4 To 8 Hour Tarpon Fishing Trip', 
    'Private 2 Hour Sunset Cruise', 
    'Private 4 Hour Ecotour Trip',
    'Private 8 Hour Family Day Charter Trip',
    'Private 4 To 8 Hour Inshore And Nearshore Fishing Trip'
  ];
  public prices = [
    800,
    350,
    350,
    950,
    650
  ];
  public descriptions = [
    'Tarpon Fishing Challenge – Hook the Silver King!',
    'Sunset Cruise – Relax and Unwind on the Water',
    'Pine Island Ecotour – Discover Nature’s Beauty!',
    'Family Day Charter – The Ultimate Gulf Experience!',
    'Inshore & Nearshore Fishing Adventure'
  ];

  currentSlide = 0;
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private swipeThreshold: number = 40; // minimum swipe distance in px

  constructor() {}

  NextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.titles.length ? 0 : next;
  }

  PreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.titles.length - 1 : previous
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    const deltaX = this.touchEndX - this.touchStartX;

    if (Math.abs(deltaX) < this.swipeThreshold) return;

    if (deltaX < 0) {
      this.NextClick(); // swipe left
    } else {
      this.PreviousClick(); // swipe right
    }
  }
}
