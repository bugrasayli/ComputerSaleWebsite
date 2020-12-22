import { Component, OnInit } from '@angular/core';
import { CpuServiceService} from '../Services/cpu-service.service';
import {cpufilter} from '../Model/Filters/CPUFilter';
import {processor} from '../Model/processor';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.scss']
})
export class ProcessorsComponent implements OnInit {

  constructor(private service : CpuServiceService) { }
  processors: processor[] = [];
  CPUFilter : cpufilter[] = [];
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
    }
    else {
      this.CPUFilter.filter(x => x.CpuID == id)[0].IsChecked = true;
    }
  }
}



