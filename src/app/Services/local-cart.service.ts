import { Injectable } from '@angular/core';
import { computer } from '../Model/computer';
import { cart } from '../Model/cart';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalCartService {
  cart: cart[]=[];

  CartSource = new BehaviorSubject<cart[]>([]);
  CartObs = this.CartSource.asObservable();

  constructor() {
    this.cart = JSON.parse(localStorage.getItem('Cart'));
  }
  // init(){}
  getProducts(): Observable<cart[]> {
    this.CartSource.next(this.cart);
    return this.CartObs;
  }
  addProduct(item: computer) {
    this.cart = [];
    var Cart: cart = new cart(item.id, item.name, item.detail.lastPrice, item.brand.name, item.graphicCard.name, item.ram.name, 1, item.detail.image, 0, 0);
    if (localStorage.getItem('Cart')) {
      this.cart = JSON.parse(localStorage.getItem('Cart'));
      if (this.cart.filter(x => x.computerID == item.id).length == 1) {
        this.cart[this.cart.findIndex(x => x.computerID == item.id)].count += 1;
        this.cart[this.cart.findIndex(x => x.computerID == item.id)].Totalprice += item.detail.lastPrice;
      } else {
        this.cart = [Cart, ...this.cart];
      }
    } else {
      this.cart = [Cart];
    }
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.CartSource.next(this.cart);
  }
  DeleteProduct(id: number) {
    let CurrentCarts: cart[] = JSON.parse(localStorage.getItem('Cart'));
    this.cart = CurrentCarts.filter(x => x.computerID != id);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    if (this.cart.length == 0) {
      localStorage.clear();
    }
  }
  Clear() {
    localStorage.clear();
    this.cart = [];
  }


}
