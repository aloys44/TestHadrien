import {
  TODO_OBJECT_ADD,
  TODO_OBJECT_ADD_ERROR,
  TODO_OBJECT_DATA_LOADED,
} from '../constants/ActionTypes';

const initialState = {
  todoList: null,
  error: false,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case TODO_OBJECT_ADD:
      return {
        todoList: [...state.todoList, action.payload],
      };

    case TODO_OBJECT_ADD_ERROR:
      return {
        todoList: null,
      };

    case TODO_OBJECT_DATA_LOADED:
      return {
        todoList: action.payload,
      };

    default:
      return state;
  }
}
