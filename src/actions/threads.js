import * as types from "../constants/ActionTypes";
import getApiUrl from "../helpers/getApiUrl";

export function GetThreads() {
  return function (dispatch) {
    return fetch(getApiUrl() + "/threads/list.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.THREAD_DATA_LOADED,
          payload: json.threadList,
        });
      });
  };
}

export function AddThread(thread) {
  return function (dispatch) {
    return fetch(getApiUrl() + "/threads/add.php", {
      method: "post",
      body: JSON.stringify(thread),
    })
      .then((response) => {
          if (response.status === 200 || response.status === 201) {
             response.json().then((json) => {
            dispatch({
                type: types.THREAD_ADD,
                payload: json,
                });
            dispatch({
              type: types.REDIRECT,
              payload: "/Accueil",
          });
            });
          } else {
          dispatch({
            type: types.THREAD_ADD_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.THREAD_ADD_ERROR,
        });
      });
  };
}