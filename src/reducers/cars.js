import * as actions from "../types/types";

const initialState = {
  data: [],
  isFetchCarsPending: false,
  isDeleteCarPending: false,
  isEditCarPending: false,
  isAddCarPending: false,
  deleteCarError: "",
  fetchCarsError: "",
  editCarError: "",
  addCarError: "",
  addedCar:{},
  updatedCar: {},
  deletedCar: {}
}

export const carsReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case actions.types.FETCH_ALL_CARS_PENDING:
      return (state = {...state, isFetchCarsPending: true });
    case actions.types.FETCH_ALL_CARS_FULFILLED:
      return (state = {...state, isFetchCarsPending: false, data: action.payload.data});
    case actions.types.FETCH_ALL_CARS_REJECTED:
      return (state = {...state, isFetchCarsPending: false, fetchCarsError: action.payload})
    case actions.types.DELETE_CAR_PENDING:
      return (state = {...state, isDeleteCarPending: true});
    case actions.types.DELETE_CAR_FULFILLED:
      return (state = {...state, isDeleteCarPending: false, deletedCar: action.payload.data });
    case actions.types.DELETE_CAR_REJECTED:
      return (state = {...state, isDeleteCarPending: false, deleteCarError: action.payload});
    case actions.types.EDIT_CAR_PENDING:
      return (state = {...state, isEditCarPending: true});
    case actions.types.EDIT_CAR_FULFILLED:
      return (state = {...state, isEditCarPending: false, updatedCar: action.payload.data });
    case actions.types.EDIT_CAR_REJECTED:
      return (state = {...state, isEditCarPending: false, editCarError: action.payload});
    case actions.types.ADD_CAR_PENDING:
      return (state = {...state, isAddCarPending: true});
    case actions.types.ADD_CAR_FULFILLED: {
      return (state = {...state, isAddCarPending: false, updatedCar: action.payload.data });
    }
    case actions.types.ADD_CAR_REJECTED:
      return (state = {...state, isAddCarPending: false, addCarError: action.payload});
    default:
      return state;
  }
}