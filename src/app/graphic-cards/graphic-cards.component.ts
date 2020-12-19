
import { Component, OnInit } from '@angular/core';
import { GraphicServiceService} from '../Services/graphic-service.service';
import { graphicCard } from '../Model/graphiccard';
import { computer } from '../Model/computer';

@Component({
  selector: 'app-graphic-cards',
  templateUrl: './graphic-cards.component.html',
  styleUrls: ['./graphic-cards.component.scss']
})
export class GraphicCardsComponent implements OnInit {

  graphics: graphicCard[];
  computers: computer[];
  a: number[];
  counts = [];
  constructor(private Service: GraphicServiceService) { }

  ngOnInit(): void {
    this.Service.GetGraphics().subscribe(x => {
      this.graphics = x;
    });
  }
}
