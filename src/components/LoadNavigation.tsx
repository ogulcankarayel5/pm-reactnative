import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import React, { useCallback } from "react";
import { AuthenticationNavigator } from "../navigation/auth-navigation";
import { useTypedSelector } from "../redux";
import { Onboarding } from "../screens";
import { AppRoutes } from "../types/navigation-type";
import { useIsFirstLaunch } from "./../hooks/useIsFirstLaunch";
import Loading from "./Loading";

const AppStack = createStackNavigator<AppRoutes>();

const LoadNavigation = () => {
  const { loading } = useTypedSelector((state) => ({
    loading: state.auth.loading,
  }));

  const { isFirst, changeValue } = useIsFirstLaunch();
  // const { isFirst } = useIsFirstLaunch();
  console.log(isFirst);

  const onDone = useCallback(async () => {
    try {
      await AsyncStorage.setItem("first29", JSON.stringify(true));
      changeValue(false);
    } catch (err) {
      console.log(err);
    }
  }, [isFirst]);

  if (isFirst === null) {
    return <AppLoading />;
  }

  return isFirst ? (
    <Onboarding onDone={onDone} />
  ) : loading ? (
    <Loading />
  ) : (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen
        name="Authentication"
        component={AuthenticationNavigator}
      />
    </AppStack.Navigator>
  );
};

export default LoadNavigation;
