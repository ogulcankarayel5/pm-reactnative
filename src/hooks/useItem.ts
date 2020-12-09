import { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { AppState, getById } from "store";

export const useItem = (id:number) => {
    const getItem = useSelector((state:AppState) => getById(state, id), shallowEqual);
    // [[id]] ?
    const item = useMemo(() => getItem, [id]);

    return { item };
};
