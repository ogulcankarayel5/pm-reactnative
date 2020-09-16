import { useDimensions } from "@react-native-community/hooks";
import React from "react";
import Animated, { interpolate } from "react-native-reanimated";
import { Box } from "../../../utils";
import { SliderImage } from "./SliderImage";
import { SliderText, SliderTitle } from "./SliderText";

type SlideProps = {
  data: {
    label: string;
    description: string;
    src: string;
  };
  x: Animated.Value<0>;
  index: number;
 
};

const Slider = ({ data, x, index }: SlideProps) => {
  const { width } = useDimensions().window;

  const opacity = interpolate(x, {
    inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
    outputRange: [0.5, 1, 0.5],
  });

  return (
    <Box width={width} justifyContent="center" alignItems="center">
      <Animated.View style={{ opacity }}>
        <SliderImage src={data.src} />
        <Box paddingHorizontal="l">
          <SliderTitle>{data.label}</SliderTitle>
          <SliderText>{data.description}</SliderText>
        </Box>
      </Animated.View>
    </Box>
  );
};
Slider.defaultProps = {
  data:{
    label:"Get Started",
    description:"Get Started",
    src:"https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1598991377/2942057-removebg-preview_1_1_no1tjb.png"
  },
 index:0,


}
export default Slider;
