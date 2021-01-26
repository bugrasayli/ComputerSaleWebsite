import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cart } from '../Model/cart';
import { computerOrder } from '../Model/Order/ComputerOrder';
import { Order } from '../Model/Order/Order';
import { User } from '../Model/Order/User';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  post(order : Order)
  {
    return this.http.post("https://localhost:44325/order",order);
  }
  checkUser(user: User)
  {
    return this.http.post<Order>("https://localhost:44325/order/checkorder",user);
  }
}
