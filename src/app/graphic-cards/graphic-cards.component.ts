
import { Component, OnInit } from '@angular/core';
import { GraphicService } from '../graphic.service';
import { ComputerService } from '../computer.service';
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
  constructor(private Service: GraphicService) { }

  ngOnInit(): void {
    this.Service.GetGraphics().subscribe(x => {
      this.graphics = x;
    });
  }
}
