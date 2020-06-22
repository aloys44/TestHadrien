import { SORTIE_ADD, SORTIE_ADD_ERROR, SORTIE_DATA_LOADED,  } from '../constants/ActionTypes';


const initialState = {
  sortieList: null,
  sortieSorted: null,
  error: false
};

export default function sorties(state = initialState, action) {
  switch (action.type) {
    case SORTIE_ADD:
      return {
        sortieList: [...state.sortieList, action.payload],
      };

      case SORTIE_ADD_ERROR:
      return {
        sortieList: null,
      };

      case SORTIE_DATA_LOADED:
      return {
        sortieList: action.payload,
      };

    default:
      return state;
  }
}