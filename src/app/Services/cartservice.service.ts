import { Injectable } from '@angular/core';
import { computer } from '../Model/computer';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  items=[];
  
  constructor() 
  {

  }
  getProducts() : Array<computer> {
    return this.items;
  }

  addProduct(item: computer) {
    this.items.push(item);
  }
  DeleteProduct(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
