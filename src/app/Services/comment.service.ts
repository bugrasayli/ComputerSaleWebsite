import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comment } from '../Model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private Http : HttpClient) { }
  private Url : 'http://localhost:65382/comment/'; 
  getComments(ID : number) : Observable<comment[]>
  {
    var url = 'http://localhost:65382/Comment/'+ ID;
    return this.Http.get<any[]>(url);
  }
  postComments(com : comment){
    console.log(JSON.stringify(com))
    return this.Http.post('https://localhost:44325/Comment/',com);
  }
}
