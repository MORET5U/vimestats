import { Dispatch } from "redux";
import Axios from "axios";
import { addPlayerError } from "../error/action";

export const actionTypes = {
  FETCH_PLAYER: "FETCH_PLAYER",
  FETCH_PLAYER_FAILURE: "FETCH_PLAYER_FAILURE",
  FETCH_PLAYER_SUCCESS: "FETCH_PLAYER_SUCCESS",
};

export const fetchPlayer = (username: string, failureCallback = () => {}) => async (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.FETCH_PLAYER });

  await Axios({
    url: `/api/player/${username}`,
    withCredentials: true,
  })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: actionTypes.FETCH_PLAYER_SUCCESS, payload: data });
    })
    .catch((err) => {
      failureCallback();
      addPlayerError(err)(dispatch);
      dispatch({ type: actionTypes.FETCH_PLAYER_FAILURE });
    });
};
