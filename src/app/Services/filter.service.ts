import { Injectable } from '@angular/core';
import { filter } from '../Model/Filters/Filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filter : filter;
  constructor() {
    this.filter = new filter(this.brand,this.CPU,this.Graphic,this.Ram)
  }
  brand: number[] = [];
  CPU: number[] = [];
  Graphic: number[] = [];
  Ram: number[] = [];
  

  addBrandFilter(id: number) {
    this.filter.brand.push(id)
  }
  addCpuFilter(id: number) {
    this.filter.cpu.push(id)
  }
  addRamFilter(id: number) {
    this.filter.ram.push(id)
  }
  addGraFilter(id: number) {
    this.filter.graphic.push(id);
  }
  removeBrandFilter(id: number) {
    const index: number = this.filter.brand.indexOf(id);
    if (index !== -1) {
      this.filter.brand.splice(index, 1);
    }
  }
  removeCpuFilter(id: number) {
    const index: number = this.filter.cpu.indexOf(id);
    if (index !== -1) {
      this.filter.cpu.splice(index, 1);
    }
  }
  removeRamFilter(id: number) {
    const index: number = this.filter.ram.indexOf(id);
    if (index !== -1) {
      this.filter.ram.splice(index, 1);
    }
  }
  removeGraFilter(id: number) {
    const index: number = this.filter.graphic.indexOf(id);
    if (index !== -1) {
      this.filter.graphic.splice(index, 1);
    }
  }
}
