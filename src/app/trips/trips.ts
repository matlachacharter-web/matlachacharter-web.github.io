import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormType } from '../services/form-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './trips.html',
  styleUrl: './trips.css'
})
export class Trips {
  formHelper: FormType = inject(FormType);
  router: Router = inject(Router);

  contentTarpon: string = "Experience the ultimate 4 to 8-hour tarpon fishing trip in Matlacha and Pine Island, where where you'll battle one of the most powerful sportfish in the Gulf. These hard-fighting giants are known for their explosive jumps and drag-screaming runs, making every catch an unforgettable experience. Captain Whitney Hall will guide you to the best tarpon hotspots, using expert techniques to give you the best chance at landing a trophy fish. With peak tarpon season offering some of the most intense fishing action, now is the perfect time to plan your trip. Test your skills against the Silver King and book your tarpon fishing adventure today!";
  contentSunset: string = "Experience the beauty of a Gulf Coast sunset on this 2-hour cruise, the perfect way to end your day in Pine Island and Matlacha. Drift through calm waters as the sky transforms into a brilliant display of colors, with dolphins often making an appearance along the way. Whether you're enjoying a romantic evening or a peaceful outing with family and friends, this cruise offers a serene way to take in Florida’s coastal charm. Feel the gentle sea breeze and listen to the soothing sounds of nature as the sun dips below the horizon. Sit back, soak in the view, and enjoy the quiet beauty of the water. Book your sunset cruise today and create lasting memories on the Gulf!";
  contentEco: string = "Explore the untouched beauty of Pine Island and Matlacha on this 4-hour ecotour, perfect for nature lovers and wildlife enthusiasts. Cruise through pristine mangrove tunnels, seagrass flats, and coastal estuaries, where you’ll spot dolphins, manatees, sea turtles, and a variety of native birds. Captain Whitney Hall will share fascinating insights about the local ecosystem, making this both a relaxing and educational experience. Reconnect with nature, capture stunning views, and enjoy the peaceful side of Florida’s Gulf Coast. Book your Pine Island ecotour today for an unforgettable adventure on the water!";
  contentFamily: string = "Spend a full 8-hour day on the water with an adventure-packed Family Day Charter that has something for everyone! Start with 2 hours of fishing, where both kids and adults can reel in exciting catches. Then, unwind on a beautiful secluded beach before enjoying a delicious lunch stop. Next, explore the charm of Cabbage Key, a scenic island rich in history and natural beauty. End the day with a 2-hour dolphin tour, watching these playful creatures in their natural habitat. Book your unforgettable family adventure today and create lasting memories on Pine Island’s waters!";
  contentInshore: string = "Spend 4 to 8 hours fishing the inshore and nearshore waters of Pine Island and Matlacha, targeting species like Redfish, Snook, Trout, Snapper, and even Shark. Whether you're an experienced angler or a first-timer, this trip offers an exciting opportunity to fish with light tackle in some of the best fishing spots in Matlacha, FL. With Captain Whitney Hall at the helm, you'll have expert guidance to help you reel in a great catch while enjoying the stunning Gulf scenery. Relax, cast your line, and experience the thrill of fishing these productive waters firsthand. Book your Pine Island fishing charter today and make memories on the water!";
  
  showMoreTarpon: boolean = false;
  showMoreSunset: boolean = false;
  showMoreEco: boolean = false;
  showMoreFamily: boolean = false;
  showMoreIn: boolean = false;
  length: number = 200;

  tarponPrice = 1500;
  tarponMorningPrice = 800;
  sunsetPrice = 350;
  ecoPrice = 350;
  familyPrice = 950;
  inPrice = 1200;
  inMorningPrice = 650;

  toggleReadMore(trip: string) {
    if(trip === 'tarpon') {
      this.showMoreTarpon = !this.showMoreTarpon;
    }
    else if (trip === 'sunset') {
      this.showMoreSunset = !this.showMoreSunset;
    }
    else if (trip === 'eco') {
      this.showMoreEco = !this.showMoreEco;
    }
    else if (trip === 'family') {
      this.showMoreFamily = !this.showMoreFamily;
    }
    else if (trip === 'in') {
      this.showMoreIn = !this.showMoreIn;
    }
  }

  routeToForm(number: number) {
    this.formHelper.setFormRoute(number);
    this.router.navigate(['/contact']);
  }
}
