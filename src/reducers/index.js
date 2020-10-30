import { combineReducers } from 'redux';
import { carsReducer } from "./cars";
import { userReducer } from "./user";

const rootReducer = combineReducers({
    // all reducers goes here
    carsReducer,
    userReducer
});

export default rootReducer;