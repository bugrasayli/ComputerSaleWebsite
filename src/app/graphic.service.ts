import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { graphicCard} from './Model/graphiccard';

@Injectable({
  providedIn: 'root'
})
export class GraphicService {

  constructor(private http: HttpClient) { }

  GetGraphics(): Observable<graphicCard[]> {
    return this.http.get<graphicCard[]>("http://localhost:65382/graphic");
  }
}
