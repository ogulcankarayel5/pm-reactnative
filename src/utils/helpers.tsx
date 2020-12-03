export const filterSearchData = (searchData, text) => {
    const result1 = searchData.filter((t) =>
        t.name.toLowerCase().includes(text.toLowerCase())
    );

    return result1;
};

export const filterStatus = (data, status) => {
    const result = data.filter((e) => e.status === status);
    return result;
};
