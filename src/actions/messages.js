import * as types from "../constants/ActionTypes";
import getApiUrl from "../helpers/getApiUrl";

export function GetMessages() {
  return function (dispatch) {
    return fetch(getApiUrl() + "/messages/list.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.MESSAGE_DATA_LOADED,
          payload: json.messageList,
        });
      });
  };
}

export function AddMessage(message) {
  return function (dispatch) {
    return fetch(getApiUrl() + "/messages/add.php", {
      method: "post",
      body: JSON.stringify(message),
    })
      .then((response) => {
          if (response.status === 200 || response.status === 201) {
             response.json().then((json) => {
            dispatch({
                type: types.MESSAGE_ADD,
                payload: json,
                });
            dispatch({
              type: types.REDIRECT,
              payload: "/ThreadList",
          });
            });
          } else {
          dispatch({
            type: types.MESSAGE_ADD_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.MESSAGE_ADD_ERROR,
        });
      });
  };
}