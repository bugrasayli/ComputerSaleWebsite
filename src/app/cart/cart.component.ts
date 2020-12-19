import { Component, OnInit } from '@angular/core';
import { computer } from '../Model/computer';
import { CartserviceService } from '../Services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  Items : computer[];
  TotalPrice : number=0;
  constructor(private service : CartserviceService) 
  {
    this.Items = service.getProducts();
    }

  ngOnInit(): void {

  }
  remove(id : number)
  {
  this.service.DeleteProduct(id);
  this.Items = this.service.getProducts();
  }
  getTotal(items : computer[])
  {
    this.TotalPrice=0;
    this.Items.forEach(element => {
      this.TotalPrice+=element.detail.lastPrice;
    });
    return this.TotalPrice;
  }

}
