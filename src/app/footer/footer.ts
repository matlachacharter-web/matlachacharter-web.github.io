import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  instagramLink = 'https://www.instagram.com/capt_whit_dawg';
  facebookLink = 'https://www.facebook.com/people/Matlacha-Saltwater-Outfitters/100094275637047';
}
