
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerserviceService } from '../Services/computerservice.service';
import { LocalCartService } from '../Services/local-cart.service';
import { DataShareService } from '../Services/data-share.service'; 
import { Component, OnInit, Output } from '@angular/core';
import { ProceedService } from '../Services/proceed.service';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.scss']
})
export class ProceedComponent implements OnInit {
  user : boolean = false;
  payment :boolean = false;
  cartPro : boolean = true;
  cartProceed : boolean = true;
  constructor(private router: Router, private data: DataShareService, private computerservice: ComputerserviceService, private cart: LocalCartService, private proceed: ProceedService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.user = false;
    this.cartPro = true;
  }
  User(){
    this.cartPro = false;
    this.payment = false;
    this.user = true;
  }
  Payment()
  {
    this.cartPro = false
    this.user = false;
    this.payment = true;
  }
}
