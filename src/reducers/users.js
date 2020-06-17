import { USER_ADD, USER_ADD_ERROR, USER_DATA_LOADED } from '../constants/ActionTypes';


const initialState = {
  userList: null,
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

    default:
      return state;
  }
}
