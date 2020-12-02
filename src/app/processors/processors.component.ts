import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.scss']
})
export class ProcessorsComponent implements OnInit {

  constructor(private service : CpuService) { }
  processors = [];
  ngOnInit(): void 
  {
    this.service.getProcessors().subscribe(x=> {
      this.processors = x;
    });
  }

}
