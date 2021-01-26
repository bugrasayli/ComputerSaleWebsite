import { Component, Input, OnInit } from '@angular/core';
import { computer } from '../../Model/computer';
import { ComputerserviceService } from '../../Services/computerservice.service';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss']
})
export class SpecificationComponent implements OnInit {

  constructor(private ComputerService: ComputerserviceService) { }
  
  @Input() computer: computer;
  
  ngOnInit(): void {
  }

}
