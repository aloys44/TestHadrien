import * as types from '../constants/ActionTypes';
import getApiUrl from '../helpers/getApiUrl';

export function GetSorties() {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/sorties/list.php`)
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
  return (dispatch) => {
    return fetch(`${getApiUrl()}/sorties/getNextSortie.php`)
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
  return (dispatch) => {
    return fetch(`${getApiUrl()}/sorties/subscriptionList.php`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.SORTIE_DATA_LOADED,
          payload: json.sortieList,
        });
      });
  };
}

export function ReactOnSortie(sortie, authToken) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/sorties/suscribed.php`, {
      method: 'post',
      body: JSON.stringify({
        id: sortie.id,
        authToken,
      }),
    })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
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

export function DeleteSortie(id) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/sorties/delete.php`, {
      method: 'post',
      body: JSON.stringify(id),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          response.json().then((json) => {
            dispatch({
              type: types.SORTIE_DELETE,
              payload: json,
            });
          });
        } else {
          dispatch({
            type: types.SORTIE_DELETE_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.SORTIE_DELETE_ERROR,
        });
      });
  };
}

export function AddSortie(sortie) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/sorties/add.php`, {
      method: 'post',
      body: JSON.stringify(sortie),
    })
      .then((response) => {
        if (response.status === 201) {
          dispatch({
            type: types.SORTIE_ADD,
            payload: sortie,
          });
          dispatch({
            type: types.REDIRECT,
            payload: '/Accueil',
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
