import { createStore, applyMiddleware, AnyAction, combineReducers, Middleware } from "redux";
import { HYDRATE, createWrapper, MakeStore, Context } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import player, { playerState } from "./player/reducer";
import error, { errorState } from "./error/reducer";

export interface IStoreState {
  player: typeof playerState;
  error: typeof errorState;
}

export const storeState: IStoreState = {
  player: playerState,
  error: errorState,
};

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  player,
  error,
});

const reducer = (state = storeState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.player) nextState.player = state.player; // preserve user value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

// create a makeStore function
const makeStore: MakeStore<IStoreState> = (context: Context) => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

// export an assembled wrapper
export const wrapper = createWrapper<IStoreState>(makeStore);
