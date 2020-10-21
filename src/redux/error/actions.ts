import { REMOVE_ERRORS, SET_ERRORS } from './constants';
import { ErrorActionTypes } from "./types";


export const setErrors = (errors:any) : ErrorActionTypes => {

    return {
        type:SET_ERRORS,
        payload:errors
    }
}

export const removeErrors =() :ErrorActionTypes=> {
    return {
        type:REMOVE_ERRORS
    }
} 