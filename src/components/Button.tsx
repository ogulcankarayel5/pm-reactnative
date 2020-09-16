import {
  ResponsiveValue
} from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { baseStyles, Box, Text, Theme, useTheme } from "../utils";

const styles = StyleSheet.create({
  container: {
    ...baseStyles.center,
  },
});
interface ButtonProps {
  onPress: () => void;
  label: string;
  color?: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  padding?: ResponsiveValue<keyof Theme["spacing"], Theme>;
  borderRadius?: ResponsiveValue<keyof Theme["borderRadii"], Theme>;
  width?: number;
}

//default color white,it comes from variant in theme
const Button = ({
  onPress,
  label,
  color,
  backgroundColor,
  padding,
  borderRadius,
  width,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <RectButton onPress={onPress}>
      <Box
        style={[styles.container, { ...props }]}
        {...{ padding, borderRadius, backgroundColor,width }}
      >
        <Text variant="button" {...{ color }}>
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

Button.defaultProps = {
  label:"Next",
  
  backgroundColor:"mainBackground",
  padding: { phone: "s", tablet: "m" },
  borderRadius: "l",
  width: 200,
};

export default Button