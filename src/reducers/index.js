import { combineReducers } from 'redux';

import suggestions from './suggestions';
import sorties from './sorties';
import users from './users';
import todo from './todos';



const reducers = combineReducers({
  suggestions,
  sorties,
  users,
  todo 
});

export default reducers;
