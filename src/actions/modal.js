import * as types from "../constants/ActionTypes";
import getApiUrl from "../helpers/getApiUrl";

export function OpenModal(title, description) {
  return function (dispatch) {
    dispatch({
        type: types.MODAL_OPEN,
        title: title,
        description: description,
    });
  };
}




export function CloseModal(todo) {
  return function (dispatch) {
    dispatch({
        type: types.MODAL_CLOSE
    });
  };
}
