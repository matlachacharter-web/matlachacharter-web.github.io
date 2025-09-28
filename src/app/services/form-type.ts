import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormType {
  type: number = 0;
  routed: boolean = false;

  setFormRoute(number: number) {
    this.type = number;
    this.routed = true;
  }

  getFormRoute() {
    if(this.routed) {
      return this.type;
    }
    else {
      return 0;
    }
  }

  clearFormRoute() {
    this.type = 0;
    this.routed = false;
  }
}
