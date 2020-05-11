import { combineReducers } from 'redux'
import BuyCarReducer from "./BuyCarReducer";

const RootReducer = combineReducers({
    car: BuyCarReducer
})
export default RootReducer


