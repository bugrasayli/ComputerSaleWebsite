import { Component, OnInit } from '@angular/core';
import { RamServiceService} from '../Services/ram-service.service';
import { ram} from '../Model/ram';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.scss']
})
export class RamComponent implements OnInit {

  public Rams = [];
  constructor(private service: RamServiceService) { }

  ngOnInit(): void {
    this.service.getRams().subscribe(x=> 
      {
        this.Rams = x
      }); 
  }

}
