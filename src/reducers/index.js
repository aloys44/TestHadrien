import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import suggestions from './suggestions';
import sorties from './sorties';
import users from './users';
import todo from './todos';
import evenements from './evenements';
import threads from './threads';
import messages from './messages';





const reducers = (history) => combineReducers({
  router: connectRouter(history),
  suggestions,
  sorties,
  users,
  todo,
  evenements,
  threads,
  messages, 
});

export default reducers;
