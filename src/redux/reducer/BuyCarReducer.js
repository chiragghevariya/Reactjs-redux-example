import { BUY_CAR } from "../type/BuyCarType";

const initialsState = {

    totalCar:100
}
export const BuyCarReducer = (state = initialsState ,action) => {

    switch (action.type){
        case BUY_CAR:
            return {
                
                ...state,
                totalCar:state.totalCar - action.payload 
            }
            default: return state;
    }
} 

export default BuyCarReducer;