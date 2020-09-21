import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LoadAssets, LoadNavigation } from "./src/components";
import { AppRoutes } from "./src/types/navigation-type";
import { ThemeProvider } from "./src/utils";

//LoadAssets font,navigation ve asset caching için

const fonts = {
  RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  Anton: require("./assets/fonts/Anton-Regular.ttf"),
  CrimsonBold: require("./assets/fonts/CrimsonText-Bold.ttf"),
  CrimsonRegular: require("./assets/fonts/CrimsonText-Regular.ttf"),
  Oswald: require("./assets/fonts/Oswald-Bold.ttf"),
};

const assets = [
  "https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1598991377/2942057-removebg-preview_1_1_no1tjb.png",
  "https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1599030254/2892856-removebg_1_1_vl6gyl.png",
];

const AppStack = createStackNavigator<AppRoutes>();
export default function App() {
 
  return (
    <ThemeProvider>
      <LoadAssets {...{ assets, fonts }}>
       <LoadNavigation/>
      </LoadAssets>
    </ThemeProvider>
  );
}
