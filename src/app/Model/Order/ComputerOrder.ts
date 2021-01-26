import { computer } from "../computer";
import { Order } from "./Order";

export class computerOrder{
    computer : computer;
    order : Order;
    quantity : number;
    price : number;
    constructor(Computer:computer,Quantity :number,order:Order,Price :number) {
        this.computer = Computer;
        this.quantity = Quantity;
        this.order = order;
        this.price = Price;
    }

}