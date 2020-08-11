/* eslint-disable import/prefer-default-export */
import { USER_CONNECTED } from '../constants/ActionTypes';
import { setCookie } from '../helpers/cookiesManager';

export const addCookiesMiddleware = () => (next) => (action) => {
  if (action.type === USER_CONNECTED) {
    setCookie('authToken', action.payload.authToken);
  }

  return next(action);
};
