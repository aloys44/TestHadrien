import { push } from 'connected-react-router'

import * as types from "../constants/ActionTypes";

export function GetSorties() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/sorties/list.php")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.SORTIE_DATA_LOADED,
          payload: json.sortieList,
        });
      });
  };
}

export function GetNextSortie() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/sorties/getNextSortie.php")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.SORTIE_NEXT_DATA_LOADED,
          payload: json,
        });
      });
  };
}

export function GetSubscribedSortie() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/sorties/subscriptionList.php")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.SORTIE_DATA_LOADED,
          payload: json.sortieList,
        });
      });
  };
}

export function ReactOnSortie(sortie, auth_token) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/sorties/suscribed.php", {
      method: "post",
      body: JSON.stringify({
        id: sortie.id,
        auth_token: auth_token,
      }),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
           console.log("eeeee");
           dispatch({
            type: types.REDIRECT,
            payload: "/Accueil",
          });
        } else {
          dispatch({
            type: types.SORTIE_ADD_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.SORTIE_ADD_ERROR,
        });
      });
  };
}

export function AddSortie(sortie) {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/sorties/add.php", {
      method: "post",
      body: JSON.stringify(sortie),
    })
      .then((response) => {
        if (response.status == 201) {
          let json = response.json();
          dispatch({
            type: types.SORTIE_ADD,
            payload: sortie,
          });
        } else {
          dispatch({
            type: types.SORTIE_DATA_LOADED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.SORTIE_DATA_LOADED,
        });
      });
  };
}
