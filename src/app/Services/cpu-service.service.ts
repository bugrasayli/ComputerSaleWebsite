import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { processor} from '../Model/processor';
@Injectable({
  providedIn: 'root'
})
export class CpuServiceService {

  constructor(private http : HttpClient) { }
  getProcessors() : Observable<processor[]>
  {
    return this.http.get<processor[]>("http://localhost:65382/cpu");
  }
}
