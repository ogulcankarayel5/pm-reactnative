import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import {
  TextInput as RNInput,
  TextInputProps as RNTextInputProps
} from "react-native";
import { widthPercentageToDP } from "../../hooks/useOrientation";
import { Box } from "../../utils";

interface TextInputProps extends RNTextInputProps {
  icon?: string;
}

const TextInput = ({ icon, ...props }: TextInputProps) => {
  return (
    <Box
      mt="m"
      flexDirection="row"
      height={48}
      alignItems="center"
      backgroundColor="primaryInput"
      borderRadius="xl"
      padding="s"
    >
      <Box padding="s">
        <Icon name={icon} size={widthPercentageToDP("4%")} color="#6A6A6A" />
      </Box>
      <Box flex={1}>
        <RNInput
          style={{ fontSize: widthPercentageToDP("4%") }}
          underlineColorAndroid="transparent"
          {...props}
        />
      </Box>
    </Box>
  );
};

export default TextInput;
