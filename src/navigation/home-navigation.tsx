import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createStackNavigator,
    StackNavigationOptions
} from '@react-navigation/stack';
import { TabBar } from 'components';
import { widthPercentageToDP } from 'hooks';
import React from 'react';
import { ItemDetail, Vault } from 'screens';
import { dataList } from 'store';
import { ChildrenProp, HomeRoutes, VaultRoutes } from 'types';
import { Text, Theme, useTheme } from 'utils';


const HomeBottomNavigator = createBottomTabNavigator<HomeRoutes>();
const VaultStackNavigator = createStackNavigator<VaultRoutes>();
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
        headerTitle: ({ children,tintColor }) => <StackHeader color={tintColor}>{children}</StackHeader>,
        headerTintColor:theme.colors.white,
        headerRightContainerStyle:{marginRight:15},
        
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        
        headerStyle: {
            elevation: 0,
            backgroundColor: theme.colors.primaryBackgroundColor,
            
        },
    };
};

type StackHeaderProps = {
    color:string|undefined
}
const StackHeader = ({ children,color }:StackHeaderProps & ChildrenProp) => {
    
    

    return (
        <Text
            fontFamily="CrimsonRegular"
            style={{color}}
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
            <VaultStackNavigator.Screen component={ItemDetail} name="ItemDetail" initialParams={{id:dataList[0].id}}/>
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
