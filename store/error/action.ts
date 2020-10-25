import { Dispatch } from "redux";

export const actionTypes = {
  ADD_ERROR: "ADD_ERROR",
  ADD_PLAYER_ERROR: "ADD_PLAYER_ERROR",
};

export const addError = (err: Error) => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.ADD_ERROR, payload: err });
};

export const addPlayerError = (err: Error) => (dispatch: Dispatch) => {
  return dispatch({ type: actionTypes.ADD_PLAYER_ERROR, payload: err });
};
