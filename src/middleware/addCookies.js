import Cookies from "universal-cookie";
import { USER_CONNECTED } from "../constants/ActionTypes";

export const addCookiesMiddleware = (store) => (next) => (action) => {
  if (action.type === USER_CONNECTED) {
    const cookies = new Cookies();

    cookies.set("auth_token", action.payload.auth_token, { path: "/" });
  }

  return next(action);
};
