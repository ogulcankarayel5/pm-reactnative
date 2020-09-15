import React from "react";
import { Box, Text } from "../../utils";
import { Image, Dimensions, ScrollViewProps, StyleSheet } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import { Button } from "../../components/Button";
import { slides } from "../../data";
interface SlideProps {
  data: {
    label: string;
    description: string;
    src: string;
  };
  x: Animated.Value<0>;
  index: number;
  onPress: (width: number, index: number) => void;
}

export const Slide = ({ data, x, index }: SlideProps) => {
  const { width, height } = useDimensions().window;
  const aspect = height / width;
  

  const opacity = interpolate(x, {
    inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
    outputRange: [0.5, 1, 0.5],
  });

  return (
    <Box width={width} justifyContent="center" alignItems="center">
      <Animated.View style={{ opacity }}>
        <Image
          source={{ uri: data.src }}
          style={{
            width: width,
            height: (aspect * width) / 1.8,
            resizeMode: "contain",
          }}
        />

        <Box paddingHorizontal="l">
          <Text variant="mainTitle">{data.label}</Text>

          <Text mt="s" variant="mainText">
            {data.description}
          </Text>
        </Box>
      </Animated.View>
    </Box>
  );
};
