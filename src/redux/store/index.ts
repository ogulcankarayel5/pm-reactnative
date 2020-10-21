import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AuthActionTypes, authReducer } from "../auth";
import { ErrorActionTypes, errorReducer } from "../error";



export const rootReducer = combineReducers({
  auth: authReducer,
  errors:errorReducer
});

export type AppActions = AuthActionTypes | ErrorActionTypes;

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
