import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../Model/Order/CreditCard';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  private URL = 'https://localhost:44325/credit';
  a: CreditCard = {
    "NameSurname": "BugraSayli", "CardNumber": "1234123412344567", "ExpiredMonth": 12, "ExpiredYear": 2012, "CVV": 123
  }
  constructor(private http: HttpClient) { };
  result: number = 0;
  
  Get(credit: CreditCard) : Observable<number> {
    return this.http.post<number>(this.URL, credit);
  }
}