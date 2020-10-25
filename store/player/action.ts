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

  try {
    const response = await Axios.get(`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/api/player/${username}`);
    const data = response.data;

    return dispatch({ type: actionTypes.FETCH_PLAYER_SUCCESS, payload: data });
  } catch (err) {
    failureCallback();
    addPlayerError(err)(dispatch);
    
    return dispatch({ type: actionTypes.FETCH_PLAYER_FAILURE });
  }
};
