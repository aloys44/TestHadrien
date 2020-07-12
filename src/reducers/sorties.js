import { SORTIE_ADD, SORTIE_ADD_ERROR, SORTIE_DATA_LOADED, SORTIE_NEXT_DATA_LOADED, SORTIE_SUSCRIBED_LIST  } from '../constants/ActionTypes';


const initialState = {
  sortieList: null,
  nextSortie: null,
  error: false
};

export default function sorties(state = initialState, action) {
  switch (action.type) {
    case SORTIE_ADD:
      return {
        sortieList: [...state.sortieList, action.payload],
        nextSortie: state.nextSortie,
      };

    case SORTIE_NEXT_DATA_LOADED:
      return {
        sortieList: state.sortieList,
        nextSortie : action.payload,
      }

      case SORTIE_ADD_ERROR:
      return {
        sortieList: null,
        nextSortie: null,
      };

      case SORTIE_DATA_LOADED:
      return {
        sortieList: action.payload,
        nextSortie: state.nextSortie,
      };

    default:
      return state;
  }
}
