import React, { ReactNode } from "react";
import { Platform } from "react-native";
import { SafeAreaView as SAW, useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../utils";


type SafeAreaViewProps = {
    children:ReactNode
}

const SafeAreaView = ({ children }:SafeAreaViewProps) => {
  const insets = useSafeAreaInsets();

  if ((Platform.OS = "ios")) {
    return <SAW style={{ flex: 1 }}>{children}</SAW>;
  }
  if ((Platform.OS = "android")) {
    return <Box flex={1} style={{paddingTop: insets.top }}>{children}</Box>;
  }
};

export default SafeAreaView;
