import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import { Button, Dot } from "../../components";
import { slides } from "../../data";
import { baseStyles, Box } from "../../utils";


const styles = StyleSheet.create({
  dot: {
    ...baseStyles.center,
  },
  button: {
    ...baseStyles.center,
  },
});

interface SubslideProps {
  x:Animated.Node<number>;
  onPress:(index:number) => void;
}

export const Subslide = ({ x,onPress }:SubslideProps) => {
  const {portrait} = useDeviceOrientation();
  const { width } = useDimensions().window;

  return (
    <>
      <Box
        mt={{ phone: "s", tablet: "m" }}
        flexDirection="row"
        style={styles.dot}
      >
        {slides.map((_, index) => {
          return (
            <Dot
              key={index + 1}
              currentIndex={divide(x, width)}
              {...{ index }}
            />
          );
        })}
      </Box>

      <Animated.View
        style={{
          flex: 0.5,
          flexDirection: "row",
          width: width * slides.length,
          transform: [{ translateX: multiply(x, -1) }],
        }}
      >
        {slides.map((_, index) => {
          const last = index === slides.length - 1;
          return (
            <Box key={index} flex={1} style={styles.button}>
              <Button
                backgroundColor="onboardingButtonColor"
                label={last ? "Get Started" : "Next"}
                onPress={() => onPress(index)}
                width={portrait ? width/2.8 : width/3.8}
                {...{ padding: "m", borderRadius: "l" }}
              />
            </Box>
          );
        })}
      </Animated.View>
    </>
  );
};


