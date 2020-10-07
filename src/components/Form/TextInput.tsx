import { Feather as Icon } from "@expo/vector-icons";
import React, { forwardRef, ReactNode } from "react";
import {
  TextInput as RNInput,
  TextInputProps as RNTextInputProps
} from "react-native";
import { BaseProps } from "../../../types";
import { widthPercentageToDP } from "../../hooks/useOrientation";
import { Box, useTheme } from "../../utils";
import RoundedIcon from "../RoundedIcon";
import Error from "./Error";

type TextInputContainerProps = BaseProps & { children: ReactNode };

export const TextInputContainer = ({
  children,
  ...props
}: TextInputContainerProps) => {
  return (
    <Box
      mt="m"
      flexDirection="row"
      height={48}
      alignItems="center"
      backgroundColor="primaryInput"
      borderRadius="xl"
      padding="s"
      {...props}
    >
      {children}
    </Box>
  );
};

interface TextInputProps extends RNTextInputProps {
  icon?: string;
  touched?: boolean;
  error?: string;
}

export const TextInput = forwardRef<RNInput, TextInputProps>(
  ({ icon, touched, error, ...props }: TextInputProps, ref) => {
    const theme = useTheme();

    return (
      <>
        <Box padding="s">
          <Icon
            name={icon}
            size={widthPercentageToDP("4%")}
            color={theme.colors.primaryFormIcon}
          />
        </Box>
        <Box flex={1}>
          <RNInput
            {...{ ref }}
            style={{ fontSize: widthPercentageToDP("4%") }}
            underlineColorAndroid="transparent"
            placeholderTextColor={theme.colors.primaryPlaceholder}
            {...props}
          />
        </Box>

        {touched && (
          <Error error={error ? true : false}>
            <RoundedIcon
              size={widthPercentageToDP("4%")}
              name={error ? "x" : "check"}
              color="white"
              backgroundColor={error ? "danger" : "primary"}
            />
          </Error>
        )}
      </>
    );
  }
);
