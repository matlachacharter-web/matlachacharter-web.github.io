import { Component } from '@angular/core';

@Component({
  selector: 'app-pine-island',
  imports: [],
  templateUrl: './pine-island.html',
  styleUrl: './pine-island.css'
})
export class PineIsland {
  natureUrl: string = 'https://www.nps.gov/ever/planyourvisit/pine-island-trails.htm';
  muesuemUrl: string = 'https://www.visitfortmyers.com/listing/museum-of-the-islands/42950';
  foodUrl: string = 'https://blog.dreamvaycay.com/blog/best-restaurants-on-pine-island';
  kayakUrl: string = 'https://www.gulfcoastkayak.com/guided-kayak-tours';
  vestevaUrl: string = "https://vesteva.com/pine-island/#:~:text=The%20tiny%20island%20has%206,Lovegrove)%2C%20Trader's%20Hitching%20Post%20(";
}
