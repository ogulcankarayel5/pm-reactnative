import { REMOVE_ERRORS, SET_ERRORS } from './constants';

export interface IError {
    errors: string[] | null;
}
export interface ErrorState {
    readonly errors: IError[];
}

export interface SetErrorsAction {
    type: typeof SET_ERRORS;
    payload: IError;
}

export interface RemoveErrorsAction {
    type: typeof REMOVE_ERRORS;
}

export type ErrorActionTypes = SetErrorsAction | RemoveErrorsAction;
