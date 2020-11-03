import * as actions from "../types/types";

const initialState = {
  user: {},
  userToken: "",
  isUserRegisterPending: false,
  isUserLoginPending: false,
  userRegisterError: "",
  userLoginError: "",
};

export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.types.USER_REGISTER_PENDING:
      return (state = { ...state, isUserRegisterPending: true });
    case actions.types.USER_REGISTER_FULFILLED:
      return (state = { ...state, isUserRegisterPending: false });
    case actions.types.USER_REGISTER_REJECTED:
      return (state = {
        ...state,
        isUserRegisterPending: false,
        userRegisterError: action.payload,
      });
    case actions.types.USER_LOGIN_PENDING:
      return (state = { ...state, isUserLoginPending: true });
    case actions.types.USER_LOGIN_FULFILLED:
      return (state = {
        ...state,
        isUserLoginPending: false,
        user: action.payload.data.user,
        userToken: action.payload.data.jwtToken,
      });
    case actions.types.USER_LOGIN_REJECTED:
      return (state = {
        ...state,
        isUserLoginPending: false,
        userLoginError: action.payload,
      });
    case actions.types.USER_LOGOUT_FULFILLED:
      return (state = { ...state, userToken: "", user: {} });
    case actions.types.SET_USER_FROM_LOCAL_STORAGE: {
      return (state = {
        ...state,
        user:
          localStorage.getItem("user") &&
          JSON.parse(localStorage.getItem("user")),
        userToken:
          localStorage.getItem("userToken") &&
          JSON.parse(localStorage.getItem("userToken")),
      });
    }
    default:
      return state;
  }
};
