import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {ram} from './Model/ram'

@Injectable({
  providedIn: 'root'
})
export class RamService {

  constructor(private http: HttpClient) { }
  getRams() : Observable<ram[]>
  {
    return this.http.get<ram[]>("http://localhost:65382/ram");
  }
}
