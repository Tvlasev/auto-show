import * as actions from "../types/types";

const initialState = {
  data: [],
  isFetchCarsPending: false,
  fetchCarsError: ""
}

export const carsReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case actions.types.FETCH_ALL_CARS_PENDING:
      return (state = {...state, isFetchCarsPending: true });
    case actions.types.FETCH_ALL_CARS_FULFILLED:
      return (state = {...state, isFetchCarsPending: false, data: action.payload.data});
    case actions.types.FETCH_ALL_CARS_REJECTED:
      return (state = {...state, isFetchCarsPending: false, fetchCarsError: action.payload})
    default:
      return state;
  }
}