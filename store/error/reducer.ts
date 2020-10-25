import { AnyAction } from "redux";
import { actionTypes } from "./action";
import { AxiosError } from "axios";

export interface ErrorState {
  player: AxiosError | null;
  other: Error | null;
}

export const errorState: ErrorState = {
  player: null,
  other: null,
};

const reducer = (state = errorState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.ADD_PLAYER_ERROR: {
      return { ...state, user: action.payload };
    }

    case actionTypes.ADD_ERROR: {
      return { ...state, other: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
