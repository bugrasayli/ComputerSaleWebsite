import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Brand } from './Model/brand';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http : HttpClient) { }

  getBrands() : Observable<Brand[]>
  {
    return this.http.get<Brand[]>("http://localhost:65382/brand");
  }
}
