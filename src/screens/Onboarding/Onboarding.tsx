import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { baseStyles, Box, makeStyles, Theme, useTheme } from "../../utils";
import { useScrollHandler } from "react-native-redash/lib/module/v1";
import { slides } from "../../data";
import { useOrientation } from "./../../hooks/useOrientation";
import { Slide } from "./Slide";

import Animated, { divide, multiply } from "react-native-reanimated";
import Dot from "./Dot";
import { useDimensions } from "@react-native-community/hooks";
import { Button } from "../../components/Button";

const useStyles = makeStyles((theme: Theme) => ({
  dot: {
    ...baseStyles.center,
  },
  button: {
    ...baseStyles.center,
  },
}));

const Onboarding = () => {
  const styles = useStyles();
  const theme = useTheme();
  const { width } = useDimensions().window;

  const { scrollHandler, x } = useScrollHandler();
  const scroll = useRef<Animated.ScrollView>(null);
  const onPress = (index: number) => {
    scroll.current?.getNode().scrollTo({ x: width * (index + 1), y: 0 });
  };
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box flex={2}>
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          ref={scroll}
          pagingEnabled
          decelerationRate="fast"
          snapToAlignment="center"
          snapToInterval={width}
          {...scrollHandler}
          horizontal
          bounces={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {slides.map((data, index) => (
            <Slide
              key={index}
              onPress={onPress}
              data={data}
              {...{ index, x }}
            />
          ))}
        </Animated.ScrollView>
      </Box>

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
          const last = index === slides.length-1 ;
          return (
            <Box key={index} flex={1} style={styles.button}>
              <Button
                backgroundColor="onboardingButtonColor"
                label={last ? "Get Started" : "Next"}
                onPress={() => onPress(index)}
                {...{ width: width/3, padding : "m", borderRadius : "l" }}
              />
            </Box>
          );
        })}
      </Animated.View>
    </Box>
  );
};

export default Onboarding;
