import { USER_ADD, USER_ADD_ERROR, USER_DATA_LOADED, USER_CONNECTED, USER_CONNECT_ERROR } from '../constants/ActionTypes';


const initialState = {
  userList: null,
  userConnect: null,
  error: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case USER_ADD:
      return {
        userList: [...state.userList, action.payload],
      };

      case USER_ADD_ERROR:
      return {
        userList: null,
      };

      case USER_DATA_LOADED:
      return {
        userList: action.payload,
      };

      case USER_CONNECTED:
      return {
        userConnect: action.payload,
      };

      case USER_CONNECT_ERROR:
      return {
        userConnect: null,
      };

    default:
      return state;
  }
}
