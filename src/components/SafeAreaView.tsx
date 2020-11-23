import { useDeviceOrientation } from "@react-native-community/hooks";
import React, { ReactNode } from "react";
import { Platform } from "react-native";
import { SafeAreaView as SAW, useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../utils";


type SafeAreaViewProps = {
    children:ReactNode,
    backgroundColor?:string
}

//React Navigation handles safe area in the default header. With out navigation use this component
export const SafeAreaView = ({ children,...props }:SafeAreaViewProps) => {
  const insets = useSafeAreaInsets();

  if ((Platform.OS === "ios")) {
  
    return <SAW  style={{ flex: 1 }} >{children}</SAW>;
  }
  if ((Platform.OS === "android")) {
    console.log("android")
    return <Box flex={1} style={{paddingTop: insets.top,...props}} >{children}</Box>;
  }
};

//Even if you're using the default navigation bar and tab bar - if your application works in landscape mode it's important to ensure your content isn't hidden behind the sensor cluster.(For IOS)
export const SafeAreaForLandScape = ({children,...props}) => {
  const portrait = useDeviceOrientation().portrait;
  if((Platform.OS==="ios") && !portrait){
    return <SAW style={{flex:1,...props}}>{children}</SAW>
  }
  else{
    return {children}
  }
}


