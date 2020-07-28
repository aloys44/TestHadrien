import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import suggestions from './suggestions';
import sorties from './sorties';
import users from './users';
import todo from './todos';
import evenements from './evenements';




const reducers = (history) => combineReducers({
  router: connectRouter(history),
  suggestions,
  sorties,
  users,
  todo,
  evenements 
});

export default reducers;
