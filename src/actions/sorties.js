import * as types from "../constants/ActionTypes";

export function GetSorties() {
  return function (dispatch) {
    return fetch("http://testhadrienback/api/sorties/list.php")
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
       })
  };
}
