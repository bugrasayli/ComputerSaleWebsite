
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
  constructor(private Service: GraphicService, private ComputerService: ComputerService) { }

  ngOnInit(): void {
    this.Service.GetGraphics().subscribe(x => {
      this.graphics = x; 
      this.ComputerService.getComputers().subscribe(x => {
        this.computers = x;
      });
    });
    console.log("gqq  q")
  }

  getCounts(a: string) {
    console.log(this.computers) 
    return this.computers.filter(data => data.graphicCard.name.includes(a)).length;

  }
}
