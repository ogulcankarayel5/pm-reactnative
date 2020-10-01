import React, { ReactNode } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { widthPercentageToDP } from "../hooks/useOrientation";
import { Box } from "../utils";

type SocialIconProps = {
  children: ReactNode;
  size: number;
};



export const SocialIcons = ({ children,...props }) => {
  return (
    <Box flexDirection="row" justifyContent="space-around" {...props}>
      {children}
    </Box>
  );
};
export const SocialIcon = ({ children, size, ...props }: SocialIconProps) => {
  return (
    <Box
      width={size}
      height={size}
      padding="s"
      backgroundColor="white"
      borderRadius="l"
      elevation={5}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
};

const defaultProps = {size:widthPercentageToDP("12%")}

SocialIcon.defaultProps = defaultProps

export const SocialIconButton = ({ onPress, children, ...props }) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <SocialIcon {...props}>{children}</SocialIcon>
    </BorderlessButton>
  );
};

SocialIconButton.defaultProps = defaultProps
