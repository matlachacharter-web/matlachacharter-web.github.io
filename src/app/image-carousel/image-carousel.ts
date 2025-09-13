import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  imports: [CommonModule],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css'
})
export class ImageCarousel implements OnInit, OnDestroy{
  @Input() images: string[] = [];
  @Input() autoPlay: boolean = true;
  @Input() interval: number = 3000;

  currentIndex = 0;
  private timer: any;

  private touchStartX: number = 0;
  private touchEndX: number = 0;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startAutoPlay() {
    this.timer = setInterval(() => {
      this.next();
    }, this.interval);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;

    if (Math.abs(deltaX) > 50) {
      // Minimum swipe threshold
      if (deltaX > 0) {
        this.prev(); // swipe right
      } else {
        this.next(); // swipe left
      }
    }
  }
}
