import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { graphicCard } from '../Model/graphicCard';

@Injectable({
  providedIn: 'root'
})
export class GraphicServiceService {

  constructor(private http: HttpClient) { }
  GetGraphics(): Observable<graphicCard[]> {
    return this.http.get<graphicCard[]>("http://localhost:65382/graphic");
  }
}
