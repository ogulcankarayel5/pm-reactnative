import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import React from "react";
import { useIsFirstLaunch } from "../hooks/useIsFirstLaunch";
import { AuthenticationNavigator } from "../navigation/auth-navigation";
import { Onboarding } from "../screens";
import { AppRoutes } from "../types/navigation-type";

const AppStack = createStackNavigator<AppRoutes>();

const LoadNavigation = () => {
  const { isFirst } = useIsFirstLaunch();

  if (isFirst === null) {
    return <AppLoading />;
  }

  return (
    <AppStack.Navigator headerMode="none">
      {isFirst ? (
        <>
           <AppStack.Screen name="Onboarding" component={Onboarding} />
          <AppStack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
       
        
        </>
      ) : (
     <>
        <AppStack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
     </>
      )}
    </AppStack.Navigator>
  );
};

export default LoadNavigation;
