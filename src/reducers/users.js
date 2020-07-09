import { USER_ADD, USER_ADD_ERROR, USER_DATA_LOADED, USER_CONNECTED, USER_CONNECT_ERROR, USER_UPDATE, USER_UPDATE_ERROR } from '../constants/ActionTypes';


const initialState = {
  userList: null,
  userConnect: null,
  user: null,
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
        user: action.payload,
      };

      case USER_CONNECT_ERROR:
      return {
        user: null,
      };
      
      case USER_UPDATE:
      return {
        user: action.payload,
      };

      case USER_UPDATE_ERROR:
      return {
        user: null,
      };

    default:
      return state;
  }
}
