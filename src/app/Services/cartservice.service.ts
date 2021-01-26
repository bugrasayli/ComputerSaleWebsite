import { Injectable } from '@angular/core';
import { computer } from '../Model/computer';
import { cart } from '../Model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  items = [];
  carts: cart[] = [];

  constructor() {

  }
  getProducts(): Array<cart> {
    return this.carts;
  }

  addProduct(item: computer) {
    console.log(item.id)
    var Cart: any = new cart(item.id, item.name, item.detail.lastPrice,item.brand,item.graphicCard,item.ram, 1, item.detail.image,0,0);

    if (this.carts.filter(x => x.computerID == item.id).length == 1) {
      var b = this.carts.findIndex(x => x.computerID == item.id);
      this.carts[b].count += 1;
      console.log(this.carts);
    }
    else {
      this.carts.push(Cart);
    }
  }
  DeleteProduct(id: number) {
    this.carts = this.carts.filter(item => item.computerID !== id);
  }

  
}
