import { Component, OnInit } from '@angular/core';
import { ComputerserviceService } from '../Services/computerservice.service' ;
import { CartserviceService} from '../Services/cartservice.service' ;
import { computer } from '../Model/computer';

import { brandfilter} from '../Model/Filters/BrandFilter';
import { cpufilter} from '../Model/Filters/CPUFilter';
import { graphicfilter} from '../Model/Filters/GraphicFilter';
import { ramfilter} from '../Model/Filters/RamFilter';


@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  constructor(private service : ComputerserviceService,private cart : CartserviceService) { }
  computers : computer[];
  ngOnInit(): void {
    this.service.getComputers().subscribe(x => 
      {
        this.computers = x;
      });
  }
  getStock(a :number):boolean
  {
    if(a == 0)
    {
      return false;
    }
    else{
      return true;
    }
  }

  AddCart(computer : computer)
  {
    console.log('It works')
    this.cart.addProduct(computer);
  }

  BrandFilter(Brands :brandfilter[])
  {

  }
  CPUFilter(Cpu : cpufilter[])
  {

  }
  GraphicFilter(Graphic : graphicfilter[])
  {

  }
  RamFilter(Ram : ramfilter[])
  {

  }
  ReceiveMessage($event)
  {
    console.log("works!!")
  }






}
