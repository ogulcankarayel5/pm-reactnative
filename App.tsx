import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoadAssets, LoadNavigation } from "./src/components";
import { fonts, onboarding1, onboarding2 } from "./src/constants";
import { ThemeProvider } from "./src/utils";


//LoadAssets font,navigation ve asset caching için
//assets = [require(./...)] and use it assets[0]
const assets = [
  require("./assets/splash.png"),
  onboarding1,
  onboarding2,
];


export default function App() {
 
  return (
  <SafeAreaProvider>
      <ThemeProvider>
      <LoadAssets {...{ assets, fonts }}>
       <LoadNavigation/>
     </LoadAssets>
    </ThemeProvider>
  </SafeAreaProvider>
  );
}
