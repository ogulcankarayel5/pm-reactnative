import { useDimensions } from "@react-native-community/hooks";
import React, { useRef } from "react";
import Animated from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash/lib/module/v1";
import { slides } from "../../data";
import { Box, useTheme } from "../../utils";
import { Slider } from "./Slider";
import { Subslide } from "./Subslide";

const Onboarding = () => {
  const theme = useTheme();
  const { width } = useDimensions().window;

  const { scrollHandler, x } = useScrollHandler();
  const scroll = useRef<Animated.ScrollView>(null);
  const onPress = (index: number) => {
    scroll.current?.getNode().scrollTo({ x: width * (index + 1),animated:true });
  };
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box flex={3}>
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          ref={scroll}
          pagingEnabled
          decelerationRate="normal"
          snapToAlignment="center"
          snapToInterval={width}
          {...scrollHandler}
          horizontal
          bounces={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {slides.map((data, index) => (
            <Slider
              key={index}
              onPress={onPress}
              data={data}
              {...{ index, x }}
            />
          ))}
        </Animated.ScrollView>
      </Box>

      <Box flex={1} justifyContent="space-evenly">
        <Subslide {...{ x, width, onPress }} />
      </Box>
    </Box>
  );
};

export default Onboarding;
