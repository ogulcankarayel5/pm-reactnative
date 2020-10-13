import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { authReducer } from "../auth/reducer";
import { AuthActionTypes } from "../auth/types";

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppActions = AuthActionTypes;

export type AppState = ReturnType<typeof rootReducer>;

const loggerMiddleware = createLogger();

export const middleware = [
  thunk as ThunkMiddleware<AppState, AppActions>,
  loggerMiddleware,
];



export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector

export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  applyMiddleware(...middleware)
);
