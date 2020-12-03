import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { createSelector } from 'reselect';

export const VisibilityFilters = {
    SHOW_ALL: 'All',
    SHOW_MASTER_PASSWORDS: 'Master Passwords',
    SHOW_SOCIAL: 'Social',
};
export const dataList = [
    {
        name: 'Instagram',
        status: VisibilityFilters.SHOW_SOCIAL,
        icon: <FontAwesome5 name="pinterest" size={28} color="white" />,
    },
    {
        name: 'Facebook',
        status: VisibilityFilters.SHOW_SOCIAL,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Pinterest',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Instagram',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Facebook',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Pinterest',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Instagram',
        status: VisibilityFilters.SHOW_SOCIAL,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Facebook',
        status: VisibilityFilters.SHOW_SOCIAL,

        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Pinterest',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="pinterest" size={28} color="white" />,
    },
    {
        name: 'Instagram',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Facebook',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Pinterest',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Instagram',
        status: VisibilityFilters.SHOW_SOCIAL,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Facebook',
        status: VisibilityFilters.SHOW_SOCIAL,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Pinterest',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
    {
        name: 'Instagram',
        status: VisibilityFilters.SHOW_MASTER_PASSWORDS,
        icon: <FontAwesome5 name="instagram" size={28} color="white" />,
    },
];

export const initialState = {
    searchKey: '',
    data: dataList,
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_SEARCH_KEY':
            return {
                ...state,
                searchKey: action.payload,
            };

        default:
            return state;
    }
}

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
});

export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export const getData = (state) => state.search.data;
export const getAllFilter = (state) => state && state.visibilityFilter;
export const getSocial = createSelector(getData, (filters) =>
    filters.filter((t) => t.status === VisibilityFilters.SHOW_SOCIAL)
);
export const getMaster = createSelector(getData, (filters) =>
    filters.filter((t) => t.status === VisibilityFilters.SHOW_MASTER_PASSWORDS)
);

export const getCurrentStatus = createSelector(
    getAllFilter,
    (_, filter) => filter,
    (visibility, filter) => visibility === filter
);

export const getActiveStatus = createSelector(
    getAllFilter,
    getData,
    getSocial,
    getMaster,
    (filter, data, social, master) => {
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

const deneme2 = (state) => state.search.searchKey;

export const getList = createSelector(
    getActiveStatus,
    deneme2,
    (statusData, deneme2) =>
        statusData.filter((t) =>
            t.name.toLowerCase().includes(deneme2.toLowerCase())
        )
);
