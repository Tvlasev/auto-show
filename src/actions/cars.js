import * as actions from "../types/types";
import {
  getAllCars,
  addNewCar,
  deleteCar,
  updateCar,
} from "../utils/cars-utils";

export const fetchAllCars = () => async (dispatch) => {
  console.log("HEREEEEE");
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
