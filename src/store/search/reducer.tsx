import { createSelector } from 'reselect';
import { TabOptions } from 'screens';
import { AppState } from 'store';
import { Data, FilterActionTypes } from 'store/search/types';
import { SET_STATUS, UPDATE_SEARCH_KEY } from './constants';
import { FilterState } from './types';

export const VisibilityFilters = {
    SHOW_ALL: 'All',
    SHOW_MASTER_PASSWORDS: 'Master Passwords',
    SHOW_SOCIAL: 'Social',
};

export const dataList: Data[] = [
    {
        id: 1,
        name: 'Instagram',
        status: VisibilityFilters.SHOW_SOCIAL,
        icon: 'instagram',
    },
    {
        id: 2,
        name: 'Facebook',
        status: VisibilityFilters.SHOW_SOCIAL,
        icon: 'facebook',
    },
    {
        id: 3,
        name: 'Pinterest',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: 'pinterest',
    },
    {
        id: 4,
        name: 'Instagram',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: 'instagram',
    },
    {
        id: 5,
        name: 'Facebook',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: 'facebook',
    },
    {
        id: 6,
        name: 'Pinterest',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: 'pinterest',
    },
    {
        id: 7,
        name: 'Instagram',
        status: VisibilityFilters.SHOW_SOCIAL,
        icon: 'instagram',
    },
    {
        id: 8,
        name: 'Facebook',
        status: VisibilityFilters.SHOW_SOCIAL,

        icon: 'facebook',
    },
    {
        id: 9,
        name: 'Pinterest',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: 'pinterest',
    },
    {
        id: 10,
        name: 'Instagram',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: 'instagram',
    },
    {
        id: 11,
        name: 'Facebook',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: 'facebook',
    },
];
export const initialState: FilterState = {
    searchKey: '',
    data: dataList,
    status: VisibilityFilters.SHOW_ALL,
};

export const filterReducer = (
    state = initialState,
    action: FilterActionTypes
): FilterState => {
    switch (action.type) {
        case UPDATE_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.payload,
            };

        default:
            return state;
    }
};

export const getData = (state: AppState) => state.filter.data;
export const getAllFilter = (state: AppState) => state && state.filter.status;
export const getSocial = createSelector(getData, (filters: Data[]) =>
    filters.filter(
        (data: Data) => data.status === VisibilityFilters.SHOW_SOCIAL
    )
);
export const getMaster = createSelector(getData, (filters: Data[]) =>
    filters.filter(
        (data: Data) => data.status === VisibilityFilters.SHOW_MASTER_PASSWORDS
    )
);

export const getCurrentStatus = createSelector(
    getAllFilter,
    (_: any, filter: TabOptions) => filter,
    (status: TabOptions, filter: TabOptions) => status === filter
);

export const getActiveStatus = createSelector(
    getAllFilter,
    getData,
    getSocial,
    getMaster,
    (filter: TabOptions, data: Data[], social: Data[], master: Data[]) => {
        switch (filter) {
            case VisibilityFilters.SHOW_ALL:
                return data;
            case VisibilityFilters.SHOW_SOCIAL:
                return social;
            case VisibilityFilters.SHOW_MASTER_PASSWORDS:
                return master;
            default:
                return data;
        }
    }
);

const getSearchKey = (state: AppState) => state && state.filter.searchKey;

export const getList = createSelector(
    getActiveStatus,
    getSearchKey,
    (statusData: Data[], key: string) =>
        statusData.filter((t) => t.name.match(new RegExp(key, 'i')))
);

// t.name.toLowerCase().includes(deneme2.toLowerCase())
export const getById = createSelector(
    getData,
    (_: any, id: number) => id,
    (data: Data[], id: number) => data.filter((t: Data) => t.id === id)
);
