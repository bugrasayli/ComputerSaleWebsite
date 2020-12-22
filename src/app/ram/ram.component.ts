import { Component, OnInit } from '@angular/core';
import { RamServiceService} from '../Services/ram-service.service';
import { ram} from '../Model/ram';
import { ramfilter} from '../Model/Filters/RamFilter';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.scss']
})
export class RamComponent implements OnInit {

  public Rams :ram[] = [];
  RamFilter : ramfilter[]=[]
  constructor(private service: RamServiceService) { }

  ngOnInit(): void {
    this.service.getRams().subscribe(x=> 
      {
        this.Rams = x;
        x.map(function (o) { return o.id }).forEach(element => {
          this.RamFilter.push({ RamID: element, IsChecked: false });
        });
      }); 
  }

  changeStatus(id, event) {
    let a = this.RamFilter.filter(x => x.RamID == id)[0];
    if (a.IsChecked == true) {
      this.RamFilter.filter(x => x.RamID == id)[0].IsChecked = false;
    }
    else {
      this.RamFilter.filter(x => x.RamID == id)[0].IsChecked = true;
    }
  }
}
