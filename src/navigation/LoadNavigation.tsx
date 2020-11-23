
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import React, { useCallback } from "react";
import Loading from "../components/Loading";
import { useIsFirstLaunch } from "../hooks/useIsFirstLaunch";
import { useTypedSelector } from "../redux";
import { Onboarding } from "../screens";
import { AppRoutes } from "../types/navigation-type";
import { HomeNavigator } from "./home-navigation";
const AppStack = createStackNavigator<AppRoutes>();

const LoadNavigation = () => {
  const { loading, user } = useTypedSelector((state) => ({
    loading: state.auth.loading,
    user: state.auth.user,
  }));


  const { isFirst, changeValue } = useIsFirstLaunch();


  const onDone = useCallback(async () => {
    try {
      await AsyncStorage.setItem("5111", JSON.stringify(true));
     
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
    <AppStack.Navigator headerMode="none" >
      <AppStack.Screen name="Home" component={HomeNavigator} />
    </AppStack.Navigator>
  );
};

export default LoadNavigation;

