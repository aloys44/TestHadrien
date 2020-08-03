import { MESSAGE_ADD, MESSAGE_ADD_ERROR, MESSAGE_DATA_LOADED} from '../constants/ActionTypes';


const initialState = {
  messageList: null,
  error: false
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_ADD:
      return {
        messageList: [...state.messageList, action.payload],
      };

      case MESSAGE_ADD_ERROR:
      return {
        messageList: null,
      };

      case MESSAGE_DATA_LOADED:
      return {
        messageList: action.payload,
      };

    default:
      return state;
  }
}
