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

export function AddSuggestion(suggestion) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/suggestions/add.php", {
      method: "post",
      body: JSON.stringify(suggestion),
    })
      .then((response) => {
          if (response.status == 201) {
            let json = response.json();
            dispatch({
                type: types.SUGGESTION_ADD,
                payload: suggestion,
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
       })
  };
}
