import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../computer.service';
import { computer } from '../Model/computer';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {

  constructor(private service : ComputerService) { }
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

}
