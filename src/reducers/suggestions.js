import { SUGGESTION_ADD, SUGGESTION_ADD_ERROR, SUGGESTION_DATA_LOADED, SUGGESTION_SORTED_DATA_LOADED } from '../constants/ActionTypes';

const initialState = {
  suggestionList: null,
  error: false
};

export default function suggestions(state = initialState, action) {
  switch (action.type) {
    case SUGGESTION_ADD:
      return {
        suggestionList: [...state.suggestionList, action.payload],
      };

      case SUGGESTION_ADD_ERROR:
      return {
        suggestionList: null,
      };

      case SUGGESTION_DATA_LOADED:
      return {
        suggestionList: action.payload,
      };

      case SUGGESTION_SORTED_DATA_LOADED:
      return {
        suggestionList: action.payload,
      };

    default:
      return state;
  }
}
