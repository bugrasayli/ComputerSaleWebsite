import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { cart } from 'src/app/Model/cart';
import { CreditCard } from 'src/app/Model/Order/CreditCard';
import { User } from 'src/app/Model/Order/User';
import { CreditcardService } from 'src/app/Services/creditcard.service';
import { OrderService } from 'src/app/Services/order.service';
import { DataShareService } from 'src/app/Services/data-share.service';
import { computerOrder } from 'src/app/Model/Order/ComputerOrder';
import { Order } from 'src/app/Model/Order/Order';
import { City } from 'src/app/Model/City';
import { Route } from '@angular/compiler/src/core';
import { computer } from 'src/app/Model/computer';
import { formatDate } from '@angular/common';
import { LocalCartService } from 'src/app/Services/local-cart.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-proceed-payment',
  templateUrl: './proceed-payment.component.html',
  styleUrls: ['./proceed-payment.component.scss']
})
export class ProceedPaymentComponent implements OnInit {

  payment = true;
  isPaid = 0;
  credit: CreditCard;
  user: User = null;
  cart: cart[] = null;
  ComputerOrder: computerOrder;
  @ViewChild('paymentForm') courseForm: NgForm;

  @Output() newItemEvent = new EventEmitter<string>();
  submit() {

  }
  constructor(private service: CreditcardService, private data: DataShareService, private orderService: OrderService, private route: Router,private LocalService: LocalCartService) { }

  ngOnInit(): void {
    this.credit = new CreditCard();
    this.data.ShareUser().subscribe(x => { this.user = x; })
    this.data.ShareCart().subscribe(x => { this.cart = x; })
  }

  Goback() {
    this.newItemEvent.emit(".");
  }
  Pay(credit: CreditCard) {
    var count;
    credit.CardNumber = credit.CardNumber + "";
    this.service.Get(credit).subscribe(data => {
      count = data;
      if (count == 0) {
        this.isPaid = 1; // Payment Error.
        this.courseForm.reset();
        
      }
      else {
        this.PostOrder();
        this.isPaid = 2; // Payment Ok.
      }
    });
  }
  PostOrder() {
    var cart = this.cart;
    var user = this.user;
    var city: City = new City(+ user.City);
    this.user.City = city;

    var credit = this.credit.CardNumber.substring(0, 4);
    var order = new Order(0, Date.now, user, credit, 0, 0, null);

    var computerOrders: computerOrder[] = [];
    cart.forEach(element => {
      let Computer = new computer();
      Computer.id = element.computerID;
      var computeror = new computerOrder(Computer, element.count, null, element.Totalprice);
      order.ID = 0;
      order.Insurance = element.insurance;
      order.Shipping = element.shipping;
      computerOrders.push(computeror);
      order.computerOrder = computerOrders;
    });
    this.orderService.post(order).subscribe(x => {
      
      if (x == 0) {
        this.isPaid = 3; //unknown error...
      }
      if (x == -1) {
        this.isPaid = 4; // stock error...
      }
      else {
        this.data.order = order;
        order.Datetime = formatDate(new Date(), 'yyyy/MM/dd', 'en');
        this.data.order.ID = +x;
        this.LocalService.Clear();
        this.route.navigate(['invoice']);
      }
    });
  }
}
