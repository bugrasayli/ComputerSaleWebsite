import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { computerOrder } from 'src/app/Model/Order/ComputerOrder';
import { Order } from 'src/app/Model/Order/Order';
import { User } from 'src/app/Model/Order/User';
import { DataShareService } from 'src/app/Services/data-share.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-checkorder',
  templateUrl: './checkorder.component.html',
  styleUrls: ['./checkorder.component.scss']
})
export class CheckorderComponent implements OnInit {

  order: Order;
  user: User;
  coms: computerOrder[] = []
  isChecked= false;
  @Output() newItemEvent = new EventEmitter<Order>();
  constructor(private orderService: OrderService,private dataShare :DataShareService) { }
  @ViewChild('loginForm') form : NgForm;
  ngOnInit(): void {

    this.user = new User();
    this.order = new Order('', '', '', '', null, null, null);
    
  }
  login(user: User) {
    this.orderService.checkUser(user).subscribe(x => {
        this.order = x;
        
        if (this.order == null) {
          console.log("hata");
          this.isChecked=true;
          this.form.reset();
        }
        else {
          this.newItemEvent.emit(this.order);
          this.dataShare.order = this.order;

        }
      }
    );
  }
}
