import { TabOptions } from 'screens';
import { SET_STATUS, UPDATE_SEARCH_KEY } from './constants';

export const updateSearchKey = (key:string) => {

    return {
        type:UPDATE_SEARCH_KEY,
        payload:key
    }
}

export const setCurrentStatus = (status:TabOptions) => {
    return {
        type:SET_STATUS,
        payload:status
    }
}