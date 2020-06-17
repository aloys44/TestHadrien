import * as types from "../constants/ActionTypes";

export function GetUsers() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/users/list.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
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
          if (response.status == 201) {
            let json = response.json();
            dispatch({
                type: types.USER_ADD,
                payload: user,
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
       })
  };
}

