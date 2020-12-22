import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrandServiceService } from '../Services/brand-service.service'
import { Brand } from '../Model/brand';
import { computer } from '../Model/computer';
import { brandfilter } from '../Model/Filters/BrandFilter';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  BrandFilter: brandfilter[] = [];
  A: boolean;
  computers: computer[]
  constructor(private service: BrandServiceService) { }
  Brands: Brand[];
  ngOnInit(): void {
    this.service.getBrands().subscribe(x => {
      this.Brands = x;
      x.map(function (o) { return o.id }).forEach(element => {
        this.BrandFilter.push({ BrandID: element, IsChecked: false });
      });
    });

  }
  changeStatus(id, event) {
    let a = this.BrandFilter.filter(x => x.BrandID == id)[0];
    if (a.IsChecked == true) {
      this.BrandFilter.filter(x => x.BrandID == id)[0].IsChecked = false;
    }
    else {
      this.BrandFilter.filter(x => x.BrandID == id)[0].IsChecked = true;
    }
    this.myEvent.emit(event);
  }
}

