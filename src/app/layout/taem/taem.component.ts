import { Component } from '@angular/core';

@Component({
  selector: 'app-taem',
  standalone: false,
  templateUrl: './taem.component.html',
  styleUrl: './taem.component.scss'
})
export class TaemComponent {
  pauseOnHover = true;
  pauseOnFocus = true;
  images = [
    './assets/carrossel1.png',
    './assets/carrossel2.png',
    './assets/carrossel3.png'
  ];

  onSlide($event: any) {}

}
