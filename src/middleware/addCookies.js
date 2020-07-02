import { USER_CONNECTED } from "../constants/ActionTypes";
import { setCookie } from "../helpers/cookiesManager";

export const addCookiesMiddleware = (store) => (next) => (action) => {
  if (action.type === USER_CONNECTED) {
    setCookie("auth_token", action.payload.auth_token);
  }

  return next(action);
};
