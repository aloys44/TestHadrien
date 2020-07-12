import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import reducers from "../reducers";

import { addCookiesMiddleware } from "../middleware/addCookies";
import { redirectMiddleware } from "../middleware/redirect";

export const history = createBrowserHistory()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers(history), // root reducer with router state
    preloadedState,
    storeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        addCookiesMiddleware,
        redirectMiddleware
      ),
    ),
  )

  return store
}