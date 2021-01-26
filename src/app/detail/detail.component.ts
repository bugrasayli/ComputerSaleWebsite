import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { computer } from '../Model/computer';
import { ComputerserviceService } from '../Services/computerservice.service';
import { comment } from '../Model/comment';
import { LocalCartService } from '../Services/local-cart.service';
import { CommentService} from '../Services/comment.service';
import { ProceedService } from '../Services/proceed.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private ComputerService: ComputerserviceService, private router: ActivatedRoute,
    private cart: LocalCartService, private route: Router,private commentService:CommentService) { }
  computer: computer = null;
  comments: comment[] = [];
  comment : comment;

  receiveMessage($event) {
    this.comments = $event
  }
  similars: computer[] = [];
  ngOnInit(): void {
    this.comment = new comment();
    let id: number = parseInt(this.router.snapshot.paramMap.get('id'));
    this.ComputerService.getComputerByID(id).subscribe(data => {
      this.computer = data;
      if (this.computer == null) {
        this.route.navigateByUrl('/');
      }
    });
  }
  AddCart(computer: computer) {
    this.cart.addProduct(computer);
  }
  Buy()
  {
    //this.ProceedService.computer= this.computer;
    this.route.navigate(['proceed/'+this.computer.id]);
  }
  PostComment(com : comment)
  {
    com.computerID = this.computer.id;
    this.commentService.postComments(com).subscribe(x => {
      location.reload();
    });
  }
}
