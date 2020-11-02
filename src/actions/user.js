import * as actions from "../types/types";
import { handleUserLoginAndSignUp } from "../utils/user-utils";

export const handleUserLogin = (event, credentials) => async dispatch => {
  dispatch({
    type: actions.types.USER_LOGIN_PENDING
  });

  try{
    const response = await handleUserLoginAndSignUp(event, credentials, "login");
    dispatch({
      type: actions.types.USER_LOGIN_FULFILLED,
      payload: response
    });
  }catch(e) {
    dispatch({
      type: actions.types.USER_LOGIN_REJECTED,
      payload: e
    });
  }
}

export const handleUserSignUp = (event, credentials) => async dispatch => {
  dispatch({
    type: actions.types.USER_REGISTER_PENDING
  });

  try{
    await handleUserLoginAndSignUp(event, credentials, "register");
    dispatch({
      type: actions.types.USER_REGISTER_FULFILLED
    });
  }catch(e) {
    dispatch({
      type: actions.types.USER_REGISTER_REJECTED,
      payload: e
    });
  }
}

export const userLogout = () => ({
  type: actions.types.USER_LOGOUT_FULFILLED
});

export const setUserFromLocalStorage = () => dispatch => {
  dispatch({
    type: actions.types.SET_USER_FROM_LOCAL_STORAGE
  });
}