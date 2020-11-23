import React, { ReactNode } from "react";
import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Box, Text } from "../../utils";
import { SafeAreaView } from "../SafeAreaView";

type FormContainerProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

const FormContainer = ({ title, children, footer }: FormContainerProps) => {
  
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box flex={1} backgroundColor="white">
          <Box flex={0.2} alignItems="center" justifyContent="center">
            <Image
              source={require("../../../assets/splash.png")}
              style={{ width: 300, height: 80 }}
            />
          </Box>

          <Box flex={1} paddingHorizontal="l" >
            <Box flex={0.5} justifyContent="center">
              <Text variant="formTitle">{title}</Text>
              {children}
            </Box>
            {footer && footer}
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default FormContainer;
