import { computer } from "../computer";
import { computerOrder } from "./ComputerOrder";
import { CreditCard } from "./CreditCard";
import { User } from "./User";

export class Order {
    ID : number;
    UserEmail : string;
    Datetime : string;
    user: User 
    credit:string = "";
    Insurance:number ;
    Shipping :number;
    computerOrder : computerOrder[];
    
    constructor(UserEmail,Datetime,User,Credit,Insurance,Shipping,ComputerOrder : computerOrder[]) {
        this.Datetime =Datetime;
        this.user = User
        this.credit = Credit;
        this.Insurance = Insurance;
        this.Shipping = Shipping;
        this.computerOrder = ComputerOrder;
        this.UserEmail = UserEmail;
    }

}