
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GraphicServiceService} from '../Services/graphic-service.service';
import { graphicCard } from '../Model/graphiccard';
import { computer } from '../Model/computer';
import { graphicfilter} from '../Model/Filters/GraphicFilter';
import { FilterService } from '../Services/filter.service';

@Component({
  selector: 'app-graphic-cards',
  templateUrl: './graphic-cards.component.html',
  styleUrls: ['./graphic-cards.component.scss']
})
export class GraphicCardsComponent implements OnInit {

  graphics: graphicCard[];
  GraphicFilter :graphicfilter[] = [];
  computers: computer[];
  a: number[];
  counts = [];
  @Output() FilterEvent = new EventEmitter();
  constructor(private Service: GraphicServiceService,private filterService : FilterService) { }

  ngOnInit(): void {
    this.Service.GetGraphics().subscribe(x => {
      this.graphics = x;
      x.map(function (o) { return o.id }).forEach(element => {
        this.GraphicFilter.push({ GraphicID: element, IsChecked: false });
      });
    });
  }
  changeStatus(id, event) {
    let a = this.GraphicFilter.filter(x => x.GraphicID == id)[0];
    if (a.IsChecked == true) {
      this.GraphicFilter.filter(x => x.GraphicID == id)[0].IsChecked = false;
      this.filterService.removeGraFilter(id);
    }
    else {
      this.GraphicFilter.filter(x => x.GraphicID == id)[0].IsChecked = true;
      this.filterService.addGraFilter(id);
    }
    this.FilterEvent.emit(this.filterService.filter);
  }
}