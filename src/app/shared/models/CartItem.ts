import { Foods } from "./food";

export class CartItem{
    price!: number;
    constructor(food:Foods){
        this.food= food;
    }

    food:Foods;
    quantity:number = 1;
    get (): Number{
        return this.food.price * this.quantity;
    }
}