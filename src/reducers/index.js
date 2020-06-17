import { combineReducers } from 'redux';

import suggestions from './suggestions';
import sorties from './sorties';
import users from './users';


const reducers = combineReducers({
  suggestions,
  sorties,
  users, 
});

export default reducers;
