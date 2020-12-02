import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { computer } from './Model/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(private http : HttpClient) { }
  getComputers() : Observable<computer[]>
  {
    return this.http.get<computer[]>("http://localhost:65382/computer");
  }
}
