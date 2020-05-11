import { BUY_CAR } from "../type/BuyCarType";

export const BuyCarAction = (number) =>{

    return {
        type:BUY_CAR,
        payload:number
    }
}
