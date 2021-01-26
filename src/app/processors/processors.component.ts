import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CpuServiceService} from '../Services/cpu-service.service';
import {cpufilter} from '../Model/Filters/CPUFilter';
import {processor} from '../Model/processor';
import { FilterService } from '../Services/filter.service';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.scss']
})
export class ProcessorsComponent implements OnInit {

  constructor(private service : CpuServiceService,private filterService: FilterService) { }
  processors: processor[] = [];
  CPUFilter : cpufilter[] = [];
  @Output() FilterEvent = new EventEmitter();
  ngOnInit(): void 
  {
    this.service.getProcessors().subscribe(x=> {
      this.processors = x;
      x.map(function (o) { return o.id }).forEach(element => {
        this.CPUFilter.push({ CpuID: element, IsChecked: false });
      });
    });
  }
  changeStatus(id) {
    let a = this.CPUFilter.filter(x => x.CpuID == id)[0];
    if (a.IsChecked == true) {
      this.CPUFilter.filter(x => x.CpuID == id)[0].IsChecked = false;
      this.filterService.removeCpuFilter(id);
    }
    else {
      this.CPUFilter.filter(x => x.CpuID == id)[0].IsChecked = true;
      this.filterService.addCpuFilter(id);
      
    }
    this.FilterEvent.emit(this.filterService.filter);
  }
}



