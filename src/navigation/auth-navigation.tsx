import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticationRoutes } from "../types/navigation-type";
import { Onboarding } from "../screens";



const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();


export const AuthenticationNavigator = () => {

    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
        </AuthenticationStack.Navigator>
    )
}