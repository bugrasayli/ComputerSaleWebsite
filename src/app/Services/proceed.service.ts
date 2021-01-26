import { Injectable } from '@angular/core';
import { computer } from '../Model/computer';

@Injectable({
  providedIn: 'root'
})
export class ProceedService {

  computer : computer;
  constructor() { }
}
