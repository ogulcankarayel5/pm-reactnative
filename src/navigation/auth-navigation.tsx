import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ForgotPassword, Login, SignUp } from 'screens';
import { AuthenticationRoutes } from 'types';

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

export const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator
            headerMode="none"
            initialRouteName="Login"
        >
            <AuthenticationStack.Screen name="Login" component={Login} />
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
            <AuthenticationStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />
        </AuthenticationStack.Navigator>
    );
};
