import { THREAD_ADD, THREAD_ADD_ERROR, THREAD_DATA_LOADED} from '../constants/ActionTypes';


const initialState = {
  threadList: null,
  error: false
};

export default function threads(state = initialState, action) {
  switch (action.type) {
    case THREAD_ADD:
      return {
        threadList: [...state.threadList, action.payload],
      };

      case THREAD_ADD_ERROR:
      return {
        threadList: null,
      };

      case THREAD_DATA_LOADED:
      return {
        threadList: action.payload,
      };

    default:
      return state;
  }
}
