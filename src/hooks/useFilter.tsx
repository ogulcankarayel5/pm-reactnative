import { useCallback, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { TabOptions } from 'screens';
import { AppState, getCurrentStatus, setCurrentStatus } from 'store';

export const useFilter = (status:TabOptions) => {
    
    const dispatch = useDispatch();

    const setStatus = useCallback(
        (status) => {
            dispatch(setCurrentStatus(status));
        },
        [dispatch]
    );

    const currentStatus = useSelector(
        (state:AppState) => getCurrentStatus(state, status),
        shallowEqual
    );
    const getStatus = useMemo(() => currentStatus, [[status]]);

    return {
        setStatus,
        getStatus,
    };
};
