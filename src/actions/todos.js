import * as types from "../constants/ActionTypes";

export function GetTodos() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/list.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.TODO_OBJECT_DATA_LOADED,
          payload: json.todoList,
        });
      });
  };
}




export function AddTodo(todo) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/add.php", {
      method: "post",
      body: JSON.stringify(todo),
    })
      .then((response) => {
          if (response.status === 200 || response.status === 201) {
             response.json().then((json) => {
            dispatch({
              type: types.TODO_OBJECT_ADD,
              payload: json,
            });
            dispatch({
              type: types.REDIRECT,
              payload: "/Accueil",
             });       
          });
        } else {
          dispatch({
            type: types.TODO_OBJECT_ADD_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.TODO_OBJECT_ADD_ERROR,
        });
      });
  };
}
