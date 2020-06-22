import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

import { addCookiesMiddleware } from "../middleware/addCookies";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(reducers, storeEnhancers(applyMiddleware(thunk, addCookiesMiddleware)));
};

export default configureStore;
