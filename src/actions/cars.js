import * as actions from "../types/types";
import {
  getAllCars,
  addNewCar,
  deleteCar,
  updateCar,
} from "../utils/cars-utils";

export const fetchAllCars = () => async dispatch => {
  dispatch({
    type: actions.types.FETCH_ALL_CARS_PENDING,
  });

  try {
    const response = await getAllCars();

    dispatch({
      type: actions.types.FETCH_ALL_CARS_FULFILLED,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: actions.types.FETCH_ALL_CARS_REJECTED,
      payload: e,
    });
  }
};

export const addCar = (newData, user, userToken) => async dispatch => {
  dispatch({
    type: actions.types.ADD_CAR_PENDING
  });

  try{
    const response = await addNewCar(newData, user, userToken);

    dispatch({
      type: actions.types.ADD_CAR_FULFILLED,
      // payload: response
    });
  }catch(e){
    dispatch({
      type: actions.types.ADD_CAR_REJECTED,
      payload: e
    });
  }
}

export const removeCar = (data, userToken) => async dispatch => {
  dispatch({
    type: actions.types.DELETE_CAR_PENDING
  });

  try{
    const response = await deleteCar(data, userToken);

    dispatch({
      type: actions.types.DELETE_CAR_FULFILLED,
      // payload: response
    });
  }catch(e){
    dispatch({
      type: actions.types.DELETE_CAR_REJECTED,
      payload: e
    });
  }
}

export const editCar = (newData, userToken) => async dispatch => {
  dispatch({
    type: actions.types.EDIT_CAR_PENDING
  });

  try{
    const response = await updateCar(newData, userToken);

    dispatch({
      type: actions.types.EDIT_CAR_FULFILLED,
      // payload: response
    });
  }catch(e) {
    dispatch({
      type: actions.types.EDIT_CAR_REJECTED,
      payload: e
    });
  }
}
