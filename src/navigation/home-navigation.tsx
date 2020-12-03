import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createStackNavigator,
    StackNavigationOptions
} from '@react-navigation/stack';
import React from 'react';
import { ChildrenProp } from 'types';
import { TabBar } from '../components';
import { widthPercentageToDP } from '../hooks/useOrientation';
import { Vault } from '../screens';
import { HomeRoutes } from '../types/navigation-type';
import { Text, Theme, useTheme } from '../utils';

const HomeBottomNavigator = createBottomTabNavigator<HomeRoutes>();
const VaultStackNavigator = createStackNavigator();
const PasswordStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
    const theme = useTheme();
    return (
        <HomeBottomNavigator.Navigator
            backBehavior="initialRoute"
            initialRouteName="Vault"
            tabBar={(props) => <TabBar {...props} />}
            tabBarOptions={{
                activeBackgroundColor: theme.colors.activeTabBarButton,
                inactiveBackgroundColor: theme.colors.inactiveTabBarButton,
            }}
        >
            <HomeBottomNavigator.Screen component={VaultStack} name="Vault" />
            <HomeBottomNavigator.Screen name="Add">
                {() => null}
            </HomeBottomNavigator.Screen>
            <HomeBottomNavigator.Screen
                component={PasswordStack}
                name="Password"
            />
        </HomeBottomNavigator.Navigator>
    );
};
// headerTitleStyle: { fontSize: widthPercentageToDP(4),color:theme.colors.white,fontWeight:"bold"},
const options = (theme: Theme): StackNavigationOptions => {
    return {
        headerTitleAlign: 'center',
        headerTitle: ({ children }) => <StackHeader>{children}</StackHeader>,

        gestureEnabled: true,
        gestureDirection: 'horizontal',

        headerStyle: {
            elevation: 0,
            backgroundColor: theme.colors.primaryBackgroundColor,
        },
    };
};

const StackHeader = ({ children }:ChildrenProp) => {
    return (
        <Text
            fontFamily="CrimsonRegular"
            color="white"
            fontSize={widthPercentageToDP('4.5%')}
        >
            {children}
        </Text>
    );
};
// birincil stack
const VaultStack = () => {
    const theme = useTheme();

    return (
        <VaultStackNavigator.Navigator
            headerMode="screen"
            screenOptions={({ route }) => options(theme)}
        >
            <VaultStackNavigator.Screen
                component={Vault}
                name="Vault"
                options={{
                    title: 'Your Passwords',
                }}
            />
        </VaultStackNavigator.Navigator>
    );
};

const PasswordStack = () => {
    const theme = useTheme();

    return (
        <PasswordStackNavigator.Navigator screenOptions={() => options(theme)}>
            <PasswordStackNavigator.Screen component={Example} name="Add" />
        </PasswordStackNavigator.Navigator>
    );
};

const Example = () => {
    return null;
};
