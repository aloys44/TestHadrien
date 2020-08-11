import * as types from '../constants/ActionTypes';

export function OpenModal(title, description) {
  return (dispatch) => {
    dispatch({
      type: types.MODAL_OPEN,
      title,
      description,
    });
  };
}

export function CloseModal() {
  return (dispatch) => {
    dispatch({
      type: types.MODAL_CLOSE,
    });
  };
}
