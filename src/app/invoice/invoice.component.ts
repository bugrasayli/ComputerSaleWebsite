import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from "jspdf";
import { computer } from '../Model/computer';
import { Order } from '../Model/Order/Order';
import { ComputerserviceService } from '../Services/computerservice.service';
import { DataShareService } from '../Services/data-share.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(private DataShareService: DataShareService, private ComputerService: ComputerserviceService, private router: Router) { }
  order: Order = null;
  TotalPrice: number = 0;
  computers: computer[] = [];
  @ViewChild('InvoicePDF') pdfTable: ElementRef;

  ngOnInit(): void {
    this.DataShareService.ShareOrder().subscribe(data => {
      this.order = data;
      console.log(data);
      if (data == null) {
        this.router.navigate(['']);
      }
      else {
        this.order.computerOrder.forEach(element => {
          this.ComputerService.getComputerByID(element.computer.id).subscribe(data => {
            element.computer = data;
            this.TotalPrice += element.price;
          })

        });
      }
    });
  }
  exportAsPDF() {
    var pdf = this.pdfTable.nativeElement.innerHTML;
    const doc = new jsPDF('p', 'pt', 'letter');
    const margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
    };

    doc.html(pdf, {
      callback: function(doc) {
        doc.save("Test1.pdf");
      }
    })

    // or
    
    doc.fromHTML(pdf, margins.left, margins.top, {}, function () {

      doc.save("Test2.pdf");
    }, margins);
  }
}

