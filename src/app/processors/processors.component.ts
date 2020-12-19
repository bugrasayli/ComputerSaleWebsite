import { Component, OnInit } from '@angular/core';
import { CpuServiceService} from '../Services/cpu-service.service';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.scss']
})
export class ProcessorsComponent implements OnInit {

  constructor(private service : CpuServiceService) { }
  processors = [];
  ngOnInit(): void 
  {
    this.service.getProcessors().subscribe(x=> {
      this.processors = x;
    });
  }

}
