import { useDeviceOrientation } from '@react-native-community/hooks';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { AsyncStorage, StatusBar } from 'react-native';

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

export type FontSource = Parameters<typeof Font.loadAsync>[0];

const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
    useEffect(() => {
        (async () => {
            await Promise.all(promises);
            cb();
        })();
    });

const useLoadAssets = (assets: string[], fonts: FontSource): boolean => {
    const [ready, setReady] = useState(false);
    usePromiseAll(
        [
            Font.loadAsync(fonts),
            ...assets.map((asset) => Asset.fromModule(asset).downloadAsync()),
        ],
        () => setReady(true)
    );
    return ready;
};

interface LoadAssetsProps {
    fonts?: FontSource;
    assets?: string[];
    children: ReactElement | ReactElement[];
}

export const LoadAssets = ({ assets, fonts, children }: LoadAssetsProps) => {
    const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
    const [initialState, setInitialState] = useState<
        InitialState | undefined
    >();
    const ready = useLoadAssets(assets || [], fonts || {});
    const portrait = useDeviceOrientation().portrait;
    useEffect(() => {
        const restoreState = async () => {
            try {
                const savedStateString = await AsyncStorage.getItem(
                    NAVIGATION_STATE_KEY
                );
                const state = savedStateString
                    ? JSON.parse(savedStateString)
                    : undefined;
                setInitialState(state);
            } finally {
                setIsNavigationReady(true);
            }
        };

        if (!isNavigationReady) {
            restoreState();
        }
    }, [isNavigationReady]);
    const onStateChange = useCallback(
        (state) =>
            AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
        []
    );
    if (!ready || !isNavigationReady) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer {...{ onStateChange, initialState }}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            {children}
        </NavigationContainer>
    );
};


