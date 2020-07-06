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

export function GetTodosCategory1() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/readTodosSortedByCategory1.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.TODO_OBJECT_DATA_LOADED_VERSION_1,
          payload: json.todoList,
        });
      });
  };
}
export function GetTodosCategory2() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/readTodosSortedByCategory2.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.TODO_OBJECT_DATA_LOADED_VERSION_2,
          payload: json.todoList,
        });
      });
  };
}
export function GetTodosCategory3() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/readTodosSortedByCategory3.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.TODO_OBJECT_DATA_LOADED_VERSION_3,
          payload: json.todoList,
        });
      });
  };
}
export function GetTodosCategory4() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/readTodosSortedByCategory4.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.TODO_OBJECT_DATA_LOADED_VERSION_4,
          payload: json.todoList,
        });
      });
  };
}
export function GetTodosCategoryUser() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/todos/readTodosSortedByCategoryUser.php")
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
          if (response.status === 200) {
             response.json().then((json) => {
            dispatch({
              type: types.TODO_OBJECT_ADD,
              payload: json,
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
