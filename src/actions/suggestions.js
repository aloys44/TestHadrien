import * as types from "../constants/ActionTypes";
import getApiUrl from "../helpers/getApiUrl";

export function GetSuggestions() {
  return function (dispatch) {
    return fetch(getApiUrl() + "/suggestions/list.php")
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

export function AddSuggestion(suggestion) {
  return function (dispatch) {
    return fetch(getApiUrl() + "/suggestions/add.php", {
      method: "post",
      body: JSON.stringify(suggestion),
    })
      .then((response) => {
          if (response.status === 200 || response.status === 201) {
             response.json().then((json) => {
            dispatch({
                type: types.SUGGESTION_ADD,
                payload: json,
                });
            dispatch({
              type: types.REDIRECT,
              payload: "/Accueil",
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
  export function GetLikeList() {
  return function (dispatch) {
    return fetch(getApiUrl() + "/suggestions/likeList.php")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.SUGGESTION_DATA_LOADED,
          payload: json.suggestionList,
        });
      });
  };
}


export function ReactOnSuggestion(suggestion, is_liked, auth_token) {
  return function (dispatch) {
    return fetch(getApiUrl() + "/suggestions/like.php", {
      method: "post",
      body: JSON.stringify({
        id: suggestion.id,
        is_liked: is_liked ? "1" : "0",
        auth_token: auth_token

      }),
    })
      .then((response) => {
          if (response.status === 200 || response.status === 201 ) {
            dispatch(GetSuggestions());
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