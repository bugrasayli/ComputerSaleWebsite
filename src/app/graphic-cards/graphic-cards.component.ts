
import { Component, OnInit } from '@angular/core';
import { GraphicServiceService} from '../Services/graphic-service.service';
import { graphicCard } from '../Model/graphiccard';
import { computer } from '../Model/computer';
import { graphicfilter} from '../Model/Filters/GraphicFilter';

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
  constructor(private Service: GraphicServiceService) { }

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
    }
    else {
      this.GraphicFilter.filter(x => x.GraphicID == id)[0].IsChecked = true;
    }
  }
}