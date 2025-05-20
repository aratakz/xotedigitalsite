import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  standalone: false,
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  scrool(elementName: string) {
    switch (elementName) {
      case 'welcome':
        let welcome = document.getElementsByTagName('app-welcome');
        welcome[0].scrollIntoView();
        break;
      case 'about':
        let about = document.getElementsByTagName('app-about');
        about[0].scrollIntoView();
        break;
      case 'stack':
        let stack = document.getElementsByTagName('app-stack');
        stack[0].scrollIntoView();
        break;
      case 'product':
        let product = document.getElementsByTagName('app-product');
        product[0].scrollIntoView();
        break;
      case 'contact':
        let contact = document.getElementsByTagName('app-contact');
        contact[0].scrollIntoView();
        break;
    }
  }
}
