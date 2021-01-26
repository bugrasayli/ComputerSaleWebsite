import { Component, Input, OnInit } from '@angular/core';
import { computer } from '../../Model/computer';
import { ComputerserviceService } from '../../Services/computerservice.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  similars: computer[] = [];
  @Input() computer : computer;
  constructor(private computerservice : ComputerserviceService) { }

  ngOnInit(): void {  
    this.computerservice.getComputerByBrand(this.computer.brand.id).subscribe(x => {
      this.similars = x.filter(a => a.id != this.computer.id);
      if (this.similars.length > 3)
        this.similars = this.similars.slice(0, 3);
    });
  }

}
