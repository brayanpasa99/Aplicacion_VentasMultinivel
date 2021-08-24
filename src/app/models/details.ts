import { Product } from "./product";

export class Details {
    constructor(product:Product){
        this.product = product
        this.amount = 0
        this.subtotal = 0
    }

    product:Product;
    amount:number;
    subtotal:number;

    

}