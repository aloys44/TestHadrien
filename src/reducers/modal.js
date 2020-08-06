import { MODAL_OPEN, MODAL_CLOSE } from '../constants/ActionTypes';


const initialState = {
  isOpen: false,
  title: "",
  description: "",
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        isOpen: true,
        title: action.title,
        description: action.description,
      };

      case MODAL_CLOSE:
      return {
        isOpen: false,
        title: "",
        description: "",
      };

    default:
      return state;
  }
}
