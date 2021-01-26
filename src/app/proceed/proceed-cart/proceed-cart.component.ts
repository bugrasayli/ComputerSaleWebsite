import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { cart } from 'src/app/Model/cart';
import { computer } from 'src/app/Model/computer';
import { ComputerserviceService } from 'src/app/Services/computerservice.service';
import { DataShareService } from 'src/app/Services/data-share.service';
import { LocalCartService } from 'src/app/Services/local-cart.service';
import { ProceedService } from 'src/app/Services/proceed.service';

@Component({
  selector: 'app-proceed-cart',
  templateUrl: './proceed-cart.component.html',
  styleUrls: ['./proceed-cart.component.scss']
})
export class ProceedCartComponent implements OnInit, OnDestroy {
  carts: cart[] = [];
  id = null;
  TotalPrice: number = 0;
  shipping = 0;
  cartSubscription: Subscription;
  insurance: number = 0;
  ids: number[] = [];
  @Output() newItemEvent = new EventEmitter<cart[]>();

  constructor(private router: Router, private data: DataShareService, private computerservice: ComputerserviceService, private cart: LocalCartService, private proceed: ProceedService, private route: ActivatedRoute, private cd: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    //  this.cartSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.TotalPrice = 0;
    this.id = this.route.snapshot.paramMap.get('id');
    this.proceedProduct();
  }

  ToUser(carts: cart[]) {
    this.data.cart = this.carts;
    this.newItemEvent.emit(carts);
  }
  proceedProduct() {
    if (this.id == null) {
      this.cartSubscription = this.cart.getProducts().subscribe(x => {
        console.log(x);
        this.TotalPrice = 0;
        this.carts = x;
        this.carts.forEach(element => { this.TotalPrice += element.Totalprice; });
        this.cd.detectChanges();
      });
    }
    else {
      var computer: computer;
      var Cart: cart = null;
      this.computerservice.getComputers().subscribe(x => {
        computer = x.filter(x => x.id == this.id)[0];
        if (computer.detail.stockSize == 0) {
          this.router.navigate(['']);
          return;
        }
        Cart = new cart(computer.id, computer.name, computer.detail.lastPrice, computer.brand.name, computer.graphicCard.name,
          computer.ram.name, 1, computer.detail.image, 0, 0);
        this.carts.push(Cart);
        this.carts.forEach(element => { this.TotalPrice += element.Totalprice; });
      })
    }
  }
  something(computer, protection) {
    this.insurance = 0;
    this.carts.forEach(element => {
      element.insurance = protection;
    });
    if (protection == 0) {
      this.insurance = this.carts.filter(x => x.computerID = computer)[0].Totalprice * 0;
    }
    if (protection == 1) {
      this.insurance = this.carts.filter(x => x.computerID = computer)[0].Totalprice * (10 / 100);
    }
    if (protection == 2) {
      this.insurance = this.carts.filter(x => x.computerID = computer)[0].Totalprice * (15 / 100);
    }
  }
  Shipping(sh: number) {
    this.carts.forEach(element => {
      element.shipping = sh * 50;
      this.shipping = sh * 50;
    });
  }
  Payment() {
    this.data.cart = this.carts;
  }
}
