
import { TabOptions } from 'screens';
import { SET_STATUS, UPDATE_SEARCH_KEY } from './constants';

export type Data = {
    id: number;
    name: string;
    status: TabOptions;
    icon: string;
};
export interface FilterState {
    readonly searchKey:string,
    readonly status:TabOptions,
    readonly data:Data[]
}

export interface UpdateSearchKeyAction{
    type:typeof UPDATE_SEARCH_KEY,
    payload:string
}

export interface SetStatusAction{
    type:typeof SET_STATUS,
    payload:TabOptions
}

export type FilterActionTypes = UpdateSearchKeyAction | SetStatusAction