import { Component, OnInit } from '@angular/core';
import { BrandServiceService } from '../Services/brand-service.service'
import { Brand } from '../Model/brand';
import { computer } from '../Model/computer';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  A: boolean;
  computers: computer[]
  constructor(private service: BrandServiceService) { }
  Brands: Brand[];
  ngOnInit(): void {
    this.service.getBrands().subscribe(x => {
      this.Brands = x;
    });
    
  }
  changeStatus(id, event) {
    console.log(id)
    console.log(event)
  }
}
