import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ram} from '../Model/ram';

@Injectable({
  providedIn: 'root'
})
export class RamServiceService {

  constructor(private http: HttpClient) { }
  getRams() : Observable<ram[]>
  {
    return this.http.get<ram[]>("http://localhost:65382/ram");
  }
}
