export const updateSearchKey = (key:string) => {
    return {
        type: 'UPDATE_SEARCH_KEY',
        payload: key,
    };
};
