import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../Model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  constructor(private http : HttpClient) { }
  getBrands() : Observable<Brand[]>
  {
    return this.http.get<Brand[]>("http://localhost:65382/brand");
  }
}
