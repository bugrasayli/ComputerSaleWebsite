import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Model/Order/Order';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit {

  isChecked : boolean = false;
  constructor(private router: Router,private orderService:OrderService) { }
  A(order: Order)
  {
    this.isChecked= true;
  }
  ngOnInit(): void {
    
  }

}
