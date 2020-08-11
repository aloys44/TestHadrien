import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import evenements from './evenements';
import messages from './messages';
import modal from './modal';
import sorties from './sorties';
import suggestions from './suggestions';
import threads from './threads';
import todo from './todos';
import users from './users';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    suggestions,
    sorties,
    users,
    todo,
    evenements,
    threads,
    messages,
    modal,
  });

export default reducers;
