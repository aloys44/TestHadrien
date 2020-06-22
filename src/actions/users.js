import * as types from "../constants/ActionTypes";

export function GetUsers() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/users/list.php")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.USER_DATA_LOADED,
          payload: json.userList,
        });
      });
  };
}

export function AddUser(user) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/users/add.php", {
      method: "post",
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status == 200) {
          response.json().then((json) => {
            dispatch({
              type: types.USER_ADD,
              payload: json,
            });
          });
        } else {
          dispatch({
            type: types.USER_ADD_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.USER_ADD_ERROR,
        });
      });
  };
}

export function ConnectUser(user) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/users/login.php", {
      method: "post",
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status == 200) {
        response.json().then((json) => {
          dispatch({
            type: types.USER_CONNECTED,
            payload: json,
          });
        });
      } else {
        dispatch({
          type: types.USER_CONNECT_ERROR,
        });
      }
    });
  };
}

export function UpdateUser(user) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/users/update.php", {
      method: "post",
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status == 201) {
        response.json().then((json) => {
          dispatch({
            type: types.USER_UPDATE,
            payload: json,
          });
        });
      } else {
        dispatch({
          type: types.USER_UPDATE_ERROR,
        });
      }
    });
  };
}
