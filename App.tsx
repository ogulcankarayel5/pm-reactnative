       

import React from "react";
import LoadAssets from "./src/components";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider, Box,Text } from "./src/utils";
import { useOrientation } from './src/hooks/useOrientation';
import { AppRoutes } from "./src/types/navigation-type";
import { AuthenticationNavigator } from "./src/navigation/auth-navigation";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";



//LoadAssets font,navigation ve asset caching için



const fonts = {
  "RobotoRegular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Anton":require("./assets/fonts/Anton-Regular.ttf"),
    "CrimsonBold":require("./assets/fonts/CrimsonText-Bold.ttf"),
    "CrimsonRegular":require("./assets/fonts/CrimsonText-Regular.ttf"),
    "Oswald":require("./assets/fonts/Oswald-Bold.ttf")
};

const assets = [
  "https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1598991377/2942057-removebg-preview_1_1_no1tjb.png",
  "https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1599030254/2892856-removebg_1_1_vl6gyl.png",
];

const AppStack = createStackNavigator<AppRoutes>()
export default function App() {
 
  return (
    <ThemeProvider>
      <LoadAssets {...{ assets,fonts }}>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Authentication" component={AuthenticationNavigator}/>
        </AppStack.Navigator>
      </LoadAssets>
    </ThemeProvider>
  );
}
