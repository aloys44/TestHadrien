import * as types from "../constants/ActionTypes";

export function GetSuggestions() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/suggestions/list.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.SUGGESTION_DATA_LOADED,
          payload: json.suggestionList,
        });
      });
  };
}

export function GetSuggestionsSorted() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/suggestions/readSuggestionSortByLike.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.SUGGESTION_SORTED_DATA_LOADED,
          payload: json.suggestionListSorted,
        });
      });
  };
}

export function AddSuggestion(suggestion) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/suggestions/add.php", {
      method: "post",
      body: JSON.stringify(suggestion),
    })
      .then((response) => {
          if (response.status == 200 || response.status == 201) {
             response.json().then((json) => {
            dispatch({
                type: types.SUGGESTION_ADD,
                payload: json,
                });
            });
          } else {
          dispatch({
            type: types.SUGGESTION_ADD_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.SUGGESTION_ADD_ERROR,
        });
      });
  };
}

export function LikeSuggestion(suggestion) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/suggestions/like.php", {
      method: "post",
      body: JSON.stringify(suggestion),
    })
      .then((response) => {
          if (response.status == 200 || response.status == 201 ) {
            dispatch(GetSuggestionsSorted());
          } else {
              dispatch({
                type: types.SUGGESTION_ADD_ERROR,
            });
          }
        
       })
       .catch(() => {
            dispatch({
                type: types.SUGGESTION_ADD_ERROR,
            });
       })
  };
}