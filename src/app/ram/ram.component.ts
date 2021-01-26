import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RamServiceService } from '../Services/ram-service.service';
import { ram } from '../Model/ram';
import { ramfilter } from '../Model/Filters/RamFilter';
import { FilterService } from '../Services/filter.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.scss']
})
export class RamComponent implements OnInit {

  public Rams: ram[] = [];
  RamFilter: ramfilter[] = [];
  @Output() FilterEvent = new EventEmitter();
  constructor(private service: RamServiceService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.service.getRams().subscribe(x => {
      this.Rams = x;
      x.map(function (o) { return o.id }).forEach(element => {
        this.RamFilter.push({ RamID: element, IsChecked: false });
      });
    });
  }

  changeStatus(id) {
    let a = this.RamFilter.filter(x => x.RamID == id)[0];
    if (a.IsChecked == true) {
      this.RamFilter.filter(x => x.RamID == id)[0].IsChecked = false;
      this.filterService.removeRamFilter(id);
    }
    else {
      this.RamFilter.filter(x => x.RamID == id)[0].IsChecked = true;
      this.filterService.addRamFilter(id);
    }
    this.FilterEvent.emit(this.filterService.filter);
  }
}
