import { Component, OnInit } from '@angular/core';
import { cart } from '../Model/cart';
import { LocalCartService } from '../Services/local-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: cart[] = [];
  TotalPrice;
  message: string;

  constructor(private service: LocalCartService,private router: Router) {
  }
  ngOnInit(): void {
    this.service.getProducts().subscribe(x => this.cart = x)
  }
  remove(id: number) {
    this.service.DeleteProduct(id);
    this.service.getProducts().subscribe(x => {
      this.cart=x;
      if(cart.length ==0)
      this.cart = null;
    });
  }
  getTotal(items: cart[]) {
    this.TotalPrice = 0;
    this.cart.forEach(element => {
      this.TotalPrice += (element.price * element.count);
    });
    return this.TotalPrice;
  }
  Clear() {
    this.service.Clear();
    this.cart = [];
  }
  Buy() {
    this.router.navigate(['/proceed']);
  }

}
