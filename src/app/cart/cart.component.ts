import { Component, OnInit } from '@angular/core';
import { cart } from '../Model/cart';
import { computer } from '../Model/computer';
import { CartserviceService } from '../Services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart : cart[];
  TotalPrice : number=0;
  constructor(private service : CartserviceService) 
  {
    this.cart = service.getProducts();
    }

  ngOnInit(): void {

  }
  remove(id : number)
  {
  this.service.DeleteProduct(id);
  this.cart = this.service.getProducts();
  }
  getTotal(items : cart[])
  {
    this.TotalPrice=0;
    this.cart.forEach(element => {
      this.TotalPrice+=element.Totalprice();
    });
    return this.TotalPrice;
  }

}
