import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Login } from "../screens";
import { AuthenticationRoutes } from "../types/navigation-type";

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
