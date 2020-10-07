import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { Box, Theme } from "../utils";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      style={{ borderRadius: size / 2 }}
      justifyContent="center"
      alignItems="center"
      height={size}
      width={size}
      {...{ backgroundColor }}
    >
      <Icon size={iconSize} {...{ name, color }} />
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIcon;
