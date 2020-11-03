import { combineReducers } from 'redux';
import { carsReducer } from "./cars";
import { userReducer } from "./user";

const rootReducer = combineReducers({
    carsReducer,
    userReducer
});

export default rootReducer;