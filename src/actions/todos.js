import * as types from "../constants/ActionTypes";

export function GetTodos() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/list.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.TODO_OBJECT_ADD_ERROR,
          payload: json.todoList,
        });
      });
  };
}

/*
export function GetSortieSorted() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/sorties/readSortieLast.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.SORTIE_DATA_LOADED,
          payload: json.sortieList,
        });
      });
  };
}
*/


export function AddTodo(todo) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/add.php", {
      method: "post",
      body: JSON.stringify(todo),
    })
      .then((response) => {
          if (response.status == 201) {
            let json = response.json();
            dispatch({
                type: types.TODO_OBJECT_ADD,
                payload: todo,
            });
          } else {
              dispatch({
                type: types.TODO_OBJECT_DATA_LOADED,
            });
          }
       })
       .catch(() => {
            dispatch({
                type: types.TODO_OBJECT_DATA_LOADED,
            });
       })
  };
}
