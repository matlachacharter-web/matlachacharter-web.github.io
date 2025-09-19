import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  isTallImg = signal<boolean | null>(false);
  selectedImage = signal<string | null>(null);
  selectedTitle = signal<string | null>(null);

  openImage(img: string, title: string) {
    this.selectedImage.set(img);
    this.selectedTitle.set(title);

    if(img === 'gallery21.jpg' || img === 'gallery14.jpg' || img === 'gallery20.jpg' || img === 'gallery5.jpg' || img === 'gallery7.jpg' || img === 'gallery11.jpg' || img === 'gallery9.jpg' || img === 'gallery8.jpg') {
      this.isTallImg.set(true);
    }
    else {
      this.isTallImg.set(false);
    }
  }

  closeImage() {
    this.selectedImage.set(null);
    this.selectedTitle.set(null);
  }
}
