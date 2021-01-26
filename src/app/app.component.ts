import { Component } from '@angular/core';
import { LocalCartService } from './Services/local-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *
   */
  constructor() {
   // lCart.init();
  }
  title = 'Computer';
}
