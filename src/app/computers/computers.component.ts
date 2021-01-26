import { Component, OnInit } from '@angular/core';
import { ComputerserviceService } from '../Services/computerservice.service';
import { computer } from '../Model/computer';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalCartService } from '../Services/local-cart.service';
import { filter } from '../Model/Filters/Filter'
import { range } from 'rxjs';


@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  constructor(private service: ComputerserviceService, private cart: LocalCartService,
    private router: Router, private route: ActivatedRoute) { }
  Maincomputers: computer[];
  counts: Number[] = [];
  computers: computer[];
  id: number;
  search: string;
  FilteredComputers: computer[];
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.id = + this.route.snapshot.paramMap.get('id');
      var begin = 6 * (this.id - 1);
      var end = (this.id - 1) * 6 + 6;
      console.log(begin + " " + end)
      this.service.getComputers().subscribe(x => {
        this.computers = x.sort((a, b) => b.detail.sold - a.detail.sold).slice(begin, end);
        for (let i = 1; i < Math.ceil(x.length / 6) + 1; i++) {
          this.counts.push(i)
        }
        this.Maincomputers = x;
        var a = x.filter(x => x.id == 40)
        console.log(a);
        console.log(x);
      });
    }
    else {

      this.service.getComputers().subscribe(x => {
        this.computers = x.sort((a, b) => b.detail.sold - a.detail.sold).slice(0, 6);
        console.log(x.length)
        for (let i = 1; i < Math.ceil(x.length / 6) + 1; i++) {
          this.counts.push(i)
        }
        console.log(this.counts)
        this.Maincomputers = x;
      });
    }
  }
  newChange(a: number) {

    this.router.navigateByUrl('/detail/' + a);
  }
  getStock(a: number): boolean {
    if (a == 0) {
      return false;
    }
    else {
      return true;
    }
  }

  AddCart(computer: computer) {
    this.cart.addProduct(computer);
  }
  MakeFilter(FilterList: filter) {
    var brands: number[] = FilterList.brand;
    var graphics: number[] = FilterList.graphic;
    var cpus: number[] = FilterList.cpu;
    var rams: number[] = FilterList.ram;
    var a = this.Maincomputers;
    if (brands.length != 0) {
      a = this.Maincomputers.filter(x => brands.includes(x.brand.id));

    }
    if (graphics.length != 0) {
      a = a.filter(x => graphics.includes(x.graphicCard.id));
    }
    if (cpus.length != 0) {
      a = a.filter(x => cpus.includes(x.processor.id));
    }
    if (rams.length != 0) {
      a = a.filter(x => rams.includes(x.ram.id));
    }
    this.computers = a.slice(0, 7);

  }
  sort(a: number) {
    if (a == 1) {
      this.computers = this.Maincomputers.sort((a, b) => a.detail.lastPrice - b.detail.lastPrice).slice(0, 7);
    }
    if (a == 2) {
      this.computers = this.Maincomputers.sort((a, b) => b.detail.lastPrice - a.detail.lastPrice).slice(0, 7);
    }
    if (a == 3)
      this.computers = this.Maincomputers.sort((a, b) => b.rate - a.rate).slice(0, 7);
    if (a == 4)
      this.computers = this.Maincomputers.sort((a, b) => b.detail.sold - a.detail.sold).slice(0, 7);
  }
  Search(search) {
    var values: string = '';
    values += search.target.value ;

    this.computers=this.Maincomputers.filter(a => a.name.toLowerCase().includes(values.toLowerCase())).slice(0,6)
  }
}
