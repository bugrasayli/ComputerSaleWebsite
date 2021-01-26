import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { computer } from '../Model/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerserviceService {

  constructor(private http : HttpClient) { }
  //private Url = "http://localhost:65382/computer";
  private Url = "http://localhost:65382/computer";
  getComputers() : Observable<computer[]>
  {
    return this.http.get<computer[]>(this.Url);
  }
  getComputerByID(ID : number) : Observable<computer>
  {
    var url =this.Url + '/'+ID;
    return this.http.get<computer>(url);
  }
  getComputerByBrand(ID : number) : Observable<computer[]>
  {
    return this.http.get<computer[]>(this.Url + '/'+ 'GetByBrand/' + ID);
  }
}
