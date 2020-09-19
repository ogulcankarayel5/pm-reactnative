import { useDimensions } from "@react-native-community/hooks";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { baseStyles, Text, Theme, useTheme } from "../utils";

const styles = StyleSheet.create({
  container: {
    ...baseStyles.center,
  },
});

type Size = "small" | "medium" | "large";

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  children: string;
  color?: keyof Theme["colors"];
  backgroundColor?: keyof Theme["colors"];
  size?: Size;
  rounded?: boolean;
}

//default color white,it comes from variant in theme
//should be added icon in future
const Button = React.memo(({
  children,
  onPress,
  color,
  backgroundColor,
  size,
  rounded,
  ...props
}: ButtonProps) => {
  const { width: wWidth } = useDimensions().window;

  const theme = useTheme();

  const bgColor = theme.colors[backgroundColor];

  const width =
    size === "small"
      ? wWidth / 4.5
      : size === "medium"
      ? wWidth / 3
      : wWidth / 2;

  const borderRadius = rounded ? theme.borderRadii.xl : theme.borderRadii.none;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderRadius,
          padding: theme.borderRadii.l,
          backgroundColor: bgColor,
          width,
          ...props,
        },
      ]}
      onPress={onPress}
    >
      <Text variant="button" {...{ color }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
})


export default Button;
