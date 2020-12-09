import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AuthActionTypes, authReducer } from '../auth';
import { ErrorActionTypes, errorReducer } from '../error';
import { filterReducer } from '../search/reducer';
import { FilterActionTypes } from '../search/types';

export const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    filter:filterReducer
});

export type AppActions = AuthActionTypes | ErrorActionTypes | FilterActionTypes;

export type AppState = ReturnType<typeof rootReducer>;

// const loggerMiddleware = createLogger();

export const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer,
    applyMiddleware(...middleware)
);
