import * as types from "../constants/ActionTypes";
import getApiUrl from "../helpers/getApiUrl";

export function GetEvenements() {
  return function (dispatch) {
    return fetch(getApiUrl() + "/evenements/list.php")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.EVENEMENT_DATA_LOADED,
          payload: json.evenementList,
        });
      });
  };
}

export function GetNotSeenListEvenement(auth_token) {
  return function (dispatch) {
    return fetch(getApiUrl() + "/evenements/getNotSeenList.php", {
      method: "post",
      body: JSON.stringify({
        auth_token: auth_token,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: types.EVENEMENT_DATA_LOADED,
          payload: json.evenementList,
        });
      });
  };
}


  export function ReactOnEvenement(evenement, auth_token) {
  return function (dispatch) {
    return fetch(getApiUrl() + "/evenements/StatutSeen.php", {
      method: "post",
      body: JSON.stringify({
        auth_token: auth_token,
      }),
    })
        .then((response) => {
        if (response.status === 200 || response.status === 201) {
            dispatch(GetNotSeenListEvenement(auth_token));
          } else {
              dispatch({
                type: types.EVENEMENT_ADD_ERROR,
            });
          }
        
       })
       .catch(() => {
            dispatch({
                type: types.EVENEMENT_ADD_ERROR,
        });
      });
  };
}

export function AddEvenement(evenement) {
  return function (dispatch) {
    return fetch(getApiUrl() + "/evenements/add.php", {
      method: "post",
      body: JSON.stringify(evenement),
    })
      .then((response) => {
          if (response.status === 200 || response.status === 201) {
             response.json().then((json) => {
            dispatch({ 
              type: types.EVENEMENT_ADD,
              payload: json,
            });
            dispatch({
              type: types.REDIRECT,
              payload: "/Accueil",
             });       
          });
        } else {
          dispatch({
            type: types.EVENEMENT_ADD_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.EVENEMENT_ADD_ERROR,
        });
      });
  };


  
}
