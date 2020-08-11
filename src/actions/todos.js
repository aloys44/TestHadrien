import * as types from '../constants/ActionTypes';
import getApiUrl from '../helpers/getApiUrl';

export function GetTodos() {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/todos/list.php`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.TODO_OBJECT_DATA_LOADED,
          payload: json.todoList,
        });
      });
  };
}

export function AddTodo(todo) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/todos/add.php`, {
      method: 'post',
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
              payload: '/Accueil',
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
