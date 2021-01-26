import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from 'src/app/Model/cart';
import { City } from 'src/app/Model/City';
import { User } from 'src/app/Model/Order/User';
import { CityService } from 'src/app/Services/city.service';
import { DataShareService } from 'src/app/Services/data-share.service';

@Component({
  selector: 'app-proceed-user',
  templateUrl: './proceed-user.component.html',
  styleUrls: ['./proceed-user.component.scss']
})
export class ProceedUserComponent implements OnInit {

  user : User ;
  CostumerName : string = null;
  CostumerEmail :string =null;
  Terms : boolean = false;

  @Output() newItemEvent = new EventEmitter<string>();

  ToPayment() {
    this.newItemEvent.emit(".");
    this.user.phone = "" + this.user.phone;
    this.data.user = this.user;
  }
  
  constructor(private cityService: CityService,private data : DataShareService,private route: Router) 
  {
    this.user = new User();
  }
  cities : City[] = [];
  cart : cart[] = []
  SelectedCity : number = -1;
  ngOnInit(): void {
    
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    })
  }
  something(a : any)
  {
    this.SelectedCity =a;
  }

}
