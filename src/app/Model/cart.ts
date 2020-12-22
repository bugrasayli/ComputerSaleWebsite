import { Injectable } from '@angular/core';
export class cart {


    constructor(computerID, name, Price, count, img) {
        this.computerID = computerID;
        this.name = name;
        this.price = Price;
        this.count = count;
        this.img = img;
    }

    computerID: number;
    name: string;
    price: number;
    count: number;
    img: string;
    Totalprice() : number {
        return this.price * this.count;
    }
}