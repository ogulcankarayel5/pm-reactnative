import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { LoadApp } from "./LoadApp";
import { store } from "./src/redux/store/index";
import { ThemeProvider } from "./src/utils";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <LoadApp />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
