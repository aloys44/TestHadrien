import { EVENEMENT_ADD, EVENEMENT_DATA_LOADED, EVENEMENT_ADD_ERROR } from '../constants/ActionTypes';


const initialState = {
  evenementList: null,
  evenementNext: null,
  error: false
};

export default function evenements(state = initialState, action) {
  switch (action.type) {
    case EVENEMENT_ADD:
      return {
        evenementList: [...state.evenementList, action.payload],
        evenementNext: state.evenementNext
      };

      case EVENEMENT_ADD_ERROR:
      return {
        evenementList: null,
        evenementNext: null,
      };

      case EVENEMENT_DATA_LOADED:
      return {
        evenementList: action.payload,
        evenementNext: state.evenementNext,
      };

    default:
      return state;
  }
}
