import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  menuValue: boolean = false;
  showLearnMore: boolean = false;

  openMenu(){
    this.menuValue =! this.menuValue ;
  }

  closeMenu() {
    this.menuValue = false;
    this.showLearnMore = false;
  }

  learnMore() {
    this.showLearnMore = !this.showLearnMore;
  }
}
