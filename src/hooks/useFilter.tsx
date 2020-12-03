import { useCallback, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { TabOptions } from 'screens';
import { getCurrentStatus, setVisibilityFilter } from 'store';
export const useFilter = (status:TabOptions) => {
    const dispatch = useDispatch();

    const setStatus = useCallback(
        (status) => {
            dispatch(setVisibilityFilter(status));
        },
        [dispatch]
    );

    const currentStatus = useSelector(
        (state) => getCurrentStatus(state, status),
        shallowEqual
    );
    const getStatus = useMemo(() => currentStatus, [[status]]);

    return {
        setStatus,
        getStatus,
    };
};
