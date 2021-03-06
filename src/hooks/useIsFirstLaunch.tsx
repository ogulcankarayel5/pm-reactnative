import AsyncStorage from '@react-native-community/async-storage';
import { useEffect, useState } from 'react';

export const useIsFirstLaunch = () => {
    const [isFirst, setIsFirst] = useState<null|boolean>(null);

    const changeValue = (value:boolean) => {
        setIsFirst(value);
    };

    useEffect(() => {
        const checkStorage = async () => {
            try {
                const value = await AsyncStorage.getItem('99');

                if (value === null) {
                    setIsFirst(true);
                } else {
                    setIsFirst(false);
                }
            } catch (err) {
                console.log(err);
            }
        };
        checkStorage();
    }, [isFirst]);

    return { isFirst, changeValue };
};
