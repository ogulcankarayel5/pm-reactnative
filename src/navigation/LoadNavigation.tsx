import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { Loading } from 'components';
import { AppLoading } from 'expo';
import { useIsFirstLaunch } from 'hooks';
import { AuthenticationNavigator } from 'navigation';
import React, { useCallback } from 'react';
import { Onboarding } from 'screens';
import { useTypedSelector } from 'store';
import { AppRoutes } from 'types';
import { HomeNavigator } from './home-navigation';

const AppStack = createStackNavigator<AppRoutes>();

const LoadNavigation = () => {
    const { loading, user } = useTypedSelector((state) => ({
        loading: state.auth.loading,
        user: state.auth.user,
    }));
    const { isFirst, changeValue } = useIsFirstLaunch();

    const onDone = useCallback(async () => {
        try {
            await AsyncStorage.setItem('99', JSON.stringify(true));

            changeValue(false);
        } catch (err) {
            console.log(err);
        }
    }, [isFirst]);

    if (isFirst === null) {
        return <AppLoading />;
    }

    if (isFirst) {
        return <Onboarding onDone={onDone} />;
    }

    return loading ? (
        <Loading />
    ) : (
        <AppStack.Navigator headerMode="none">
            {user ? (
                <AppStack.Screen name="Home" component={HomeNavigator} />
            ) : (
                <AppStack.Screen
                    name="Authentication"
                    component={AuthenticationNavigator}
                />
            )}
        </AppStack.Navigator>
    );
};

export default LoadNavigation;
