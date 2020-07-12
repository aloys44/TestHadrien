import { push } from 'connected-react-router'

import { REDIRECT } from "../constants/ActionTypes";

export const redirectMiddleware = (store) => (next) => (action) => {
  if (action.type === REDIRECT) {
    store.dispatch(push(action.payload));
  }

  return next(action);
};
