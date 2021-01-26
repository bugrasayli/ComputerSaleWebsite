import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../Services/data-share.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private data: DataShareService) { }

  ngOnInit(): void {
    
  }
  home() {
    this.router.navigateByUrl('/');
  }
}
