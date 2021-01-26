import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { cart } from '../Model/cart';
import { Order } from '../Model/Order/Order';
import { User } from '../Model/Order/User';


@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  MessageSource = new BehaviorSubject<string>('Default Message');
  CurrentMessage = this.MessageSource.asObservable();
  cart: cart[] = [];
  user: User = null;
  order: Order = null;
  constructor() {
    this.cart = [];
    this.user = null;
    this.order = null;
  }
  ShareCart(): Observable<cart[]> {
    return of(this.cart);
  }

  ShareOrder(): Observable<Order> {
    return of(this.order);
  }
  ShareUser(): Observable<User> {
    return of(this.user)
  }
}
