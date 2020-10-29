import { combineReducers } from 'redux';
import { carsReducer } from "./cars";

const rootReducer = combineReducers({
    // all reducers goes here
    carsReducer
});

export default rootReducer;