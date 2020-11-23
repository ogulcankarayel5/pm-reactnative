import React from "react";
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { LoadAssets } from "./src/components";
import { fonts, onboarding1, onboarding2 } from "./src/constants";
import { LoadNavigation } from "./src/navigation";
import { store } from "./src/redux/store/index";
import { ThemeProvider } from "./src/utils";

const assets = [require("./assets/splash.png"), onboarding1, onboarding2];

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <LoadAssets {...{ assets, fonts }}>
            <LoadNavigation />
            <FlashMessage position="top" />
          </LoadAssets>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
