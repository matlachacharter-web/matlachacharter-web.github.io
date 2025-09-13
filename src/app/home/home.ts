import { Component, OnInit } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  imports: [Carousel, GoogleMapsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  readMore: boolean = false;
  currentDate: Date = new Date();
  currentYear: number = 0;

  zoom = 10;
  center: google.maps.LatLngLiteral = { lat: 26.589822154860503, lng: -82.10643317182769 }; 

  // Define your polygon's coordinates
  polygonCoords: google.maps.LatLngLiteral[] = [
    { lat: 26.700874343838866, lng: -82.07746610042354 },
    { lat: 26.645720163703803, lng: -82.16645227300877 },
    { lat: 26.51438696923223, lng: -82.13077000710236 },
    { lat: 26.509005339231006, lng: -82.00856003395582 }
  ];

  // Optional: Customize polygon appearance
  polygonOptions: google.maps.PolygonOptions = {
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    clickable: false,
    editable: false,
    draggable: false,
    geodesic: false,
    zIndex: 1
  };

  constructor() {}

  ngOnInit() {
    this.currentYear = this.currentDate.getFullYear();
    
  }

  toggleRead() {
    this.readMore = !this.readMore;
  }
}