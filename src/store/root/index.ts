import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AuthActionTypes, authReducer } from '../auth';
import { ErrorActionTypes, errorReducer } from '../error';
import { searchReducer, visibilityFilter } from '../search/reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    search: searchReducer,
    visibilityFilter,
});

export type AppActions = AuthActionTypes | ErrorActionTypes;

export type AppState = ReturnType<typeof rootReducer>;

// const loggerMiddleware = createLogger();

export const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer,
    applyMiddleware(...middleware)
);
