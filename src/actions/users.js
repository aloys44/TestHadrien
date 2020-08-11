import * as types from '../constants/ActionTypes';
import getApiUrl from '../helpers/getApiUrl';

export function GetUsers() {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/list.php`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.USER_DATA_LOADED,
          payload: json.userList,
        });
      });
  };
}

export function GetUserByAuthToken(authToken) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/getUserByAuthToken.php`, {
      method: 'post',
      body: JSON.stringify({ authToken }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: types.USER_CONNECTED,
          payload: json,
        });
      });
  };
}

export function UpdateUser(user) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/updateProfil.php`, {
      method: 'post',
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((json) => {
            dispatch({
              type: types.USER_UPDATE,
              payload: json,
            });
            dispatch({
              type: types.REDIRECT,
              payload: '/Accueil',
            });
          });
        } else {
          dispatch({
            type: types.USER_UPDATE_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.USER_UPDATE_ERROR,
        });
      });
  };
}

export function listPastSorties(authToken) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/listPastSorties.php`, {
      method: 'post',
      body: JSON.stringify({
        authToken,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((json) => {
            dispatch({
              type: types.USER_DATA_LOADED,
              payload: json,
            });
          });
        } else {
          dispatch({
            type: types.USER_UPDATE_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.USER_UPDATE_ERROR,
        });
      });
  };
}

export function promoteRank1(authToken) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/promoteRank1.php`, {
      method: 'post',
      body: JSON.stringify({
        authToken,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((json) => {
            dispatch({
              type: types.USER_UPDATE,
              payload: json,
            });
          });
        } else {
          dispatch({
            type: types.USER_UPDATE_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.USER_UPDATE_ERROR,
        });
      });
  };
}

export function promoteRank2(authToken) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/promoteRank2.php`, {
      method: 'post',
      body: JSON.stringify({
        authToken,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((json) => {
            dispatch({
              type: types.USER_UPDATE,
              payload: json,
            });
          });
        } else {
          dispatch({
            type: types.USER_UPDATE_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.USER_UPDATE_ERROR,
        });
      });
  };
}

export function promoteRank3(authToken) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/promoteRank3.php`, {
      method: 'post',
      body: JSON.stringify({
        authToken,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((json) => {
            dispatch({
              type: types.USER_UPDATE,
              payload: json,
            });
          });
        } else {
          dispatch({
            type: types.USER_UPDATE_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.USER_UPDATE_ERROR,
        });
      });
  };
}

export function promoteRank4(authToken) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/promoteRank4.php`, {
      method: 'post',
      body: JSON.stringify({
        authToken,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((json) => {
            dispatch({
              type: types.USER_UPDATE,
              payload: json,
            });
          });
        } else {
          dispatch({
            type: types.USER_UPDATE_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.USER_UPDATE_ERROR,
        });
      });
  };
}

export function AddUser(user) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/add.php`, {
      method: 'post',
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          response.json().then((json) => {
            dispatch({
              type: types.USER_ADD,
              payload: json,
            });
            dispatch({
              type: types.REDIRECT,
              payload: '/Accueil',
            });
          });
        } else {
          dispatch({
            type: types.USER_ADD_ERROR,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: types.USER_ADD_ERROR,
        });
      });
  };
}

export function ConnectUser(user) {
  return (dispatch) => {
    return fetch(`${getApiUrl()}/users/login.php`, {
      method: 'post',
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((json) => {
          dispatch({
            type: types.USER_CONNECTED,
            payload: json,
          });
          dispatch({
            type: types.REDIRECT,
            payload: '/Connexion',
          });
        });
      } else {
        dispatch({
          type: types.USER_CONNECT_ERROR,
        });
      }
    });
  };
}
