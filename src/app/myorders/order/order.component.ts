import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/Model/Order/Order';
import { DataShareService } from 'src/app/Services/data-share.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() InputOrder;
  constructor(private dataShare: DataShareService) { }
  order : Order;

  ngOnInit(): void {
    this.dataShare.ShareOrder().subscribe(x =>
      { 
        this.order=x;
       console.log(this.order)
      });
  }

}
