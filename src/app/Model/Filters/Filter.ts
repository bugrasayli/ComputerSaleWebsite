
export class filter {
    brand: number[] =[];
    cpu: number[]=[];
    graphic: number[]=[];
    ram: number[]=[];
    constructor(brand: number[],CPU:number[],graphic :number[],ram:number[]) {
        this.brand =brand;
        this.cpu = CPU;
        this.graphic = graphic ;
        this.ram = ram;
        
    }
}