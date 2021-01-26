import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Model/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http : HttpClient) { }
  getCities() : Observable<City[]>
  {
    return this.http.get<City[]>('http://localhost:65382/city');
  }
}
