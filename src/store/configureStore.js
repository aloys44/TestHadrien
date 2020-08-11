import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { addCookiesMiddleware } from '../middleware/addCookies';
import { redirectMiddleware } from '../middleware/redirect';
import reducers from '../reducers';

export const history = createBrowserHistory();

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
      )
    )
  );

  return store;
}
