import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comment } from '../../Model/comment';
import { CommentService } from '../../Services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private commentService : CommentService,private router: ActivatedRoute) { }
  comments : comment[] = [];
  @Output() messageEvent = new EventEmitter<comment[]>();
  ngOnInit(): void {
    let id: number = parseInt(this.router.snapshot.paramMap.get('id'));
    this.commentService.getComments(id).subscribe(data => {
      this.comments = data;
      this.messageEvent.emit(this.comments);
    });
  }

}
