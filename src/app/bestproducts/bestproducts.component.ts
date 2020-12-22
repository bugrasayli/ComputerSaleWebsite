import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { computer } from '../Model/computer';
import { ComputerserviceService } from '../Services/computerservice.service';

@Component({
  selector: 'app-bestproducts',
  templateUrl: './bestproducts.component.html',
  styleUrls: ['./bestproducts.component.scss']
})
export class BestproductsComponent implements OnInit {

  constructor(private service: ComputerserviceService) { }
  BestSeller: computer;
  HighRated: computer;
  discounted: computer;
  ids: number[] = [];

  computers: computer[] = [];
  ngOnInit(): void {
    this.service.getComputers().subscribe(x => {
      this.computers = x;
      this.BestSeller = this.computers.filter(x => x.detail.sold === Math.max.apply(Math, this.computers.map(function (o) { return o.detail.sold; })))[0];
      this.HighRated = this.computers.filter(x => x.rate === Math.max.apply(Math, this.computers.map(function (o) { return o.rate; })))[0];
      this.discounted = this.computers.filter(x => x.detail.discount > 0)[0];
    });
  }
}
