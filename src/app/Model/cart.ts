
export class cart {


    constructor(computerID, name, Price,brand,graphic,ram, count, img,insurance,shipping) {
        this.computerID = computerID;
        this.name = name;
        this.price = Price;
        this.brand = brand;
        this.graphic= graphic;
        this.ram=ram;
        this.count = count;
        this.img = img;
        this.img = img;
        this.Totalprice = this.price*count;
        this.insurance = insurance;
        this.shipping = shipping;
    }

    computerID: number;
    brand: string;
    ram: string;
    graphic: string;
    name: string;
    insurance:number;
    price: number;
    count: number;
    img: string;
    Totalprice :number;
    shipping: number;
    }