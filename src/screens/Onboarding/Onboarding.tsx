import { useDimensions } from "@react-native-community/hooks";
import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { useCallback, useRef, useState } from "react";
import { Animated } from "react-native";
import { Button, Dot } from "../../components";
import { slides } from "../../data";
import { Box } from "../../utils";
import { Slider, SliderImage, SliderText, SliderTitle } from "./Slider";
import { SubSlider, SubSliderItem } from "./SubSlider";

const Onboarding = () => {
  const navigation = useNavigation();
  const { width } = useDimensions().window;
  const [completed, setCompleted] = useState(false);
  const scroll = useRef(null);

  const x = React.useRef(new Animated.Value(0)).current;

  const onPress = useCallback((index: number) => {
    scroll.current.scrollTo({ x: width * (index + 1), animated: true });
  }, []);

  React.useEffect(() => {
    x.addListener(({ value }) => {
      if (Math.ceil(value / width) === slides.length - 1) {
        setCompleted(true);
      } else {
        setCompleted(false);
      }
    });

    return () => x.removeAllListeners();
  }, []);

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
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x } } }],
            { useNativeDriver: true }
          )}
          horizontal
          bounces={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {slides.map((data, index) => {
            const opacity = x.interpolate({
              inputRange: [
                (index - 0.5) * width,
                index * width,
                (index + 0.5) * width,
              ],
              outputRange: [0.5, 1, 0.5],
            });

            return (
              <Slider key={index}>
                <Animated.View style={{ opacity }}>
                  <SliderImage src={data.src} />
                  <Box paddingHorizontal="l">
                    <SliderTitle>{data.label}</SliderTitle>
                    <SliderText>{data.description}</SliderText>
                  </Box>
                </Animated.View>
              </Slider>
            );
          })}
        </Animated.ScrollView>
      </Box>

      <SubSlider>
        <SubSliderItem>
          {slides.map((_, index) => {
            return (
              <Dot
                key={index + 1}
                currentIndex={Animated.divide(x, width)}
                {...{ index }}
              />
            );
          })}
        </SubSliderItem>
        <SubSliderItem>
          <Button
            onPress={() => {
              if (completed) {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Authentication" }],
                  })
                );
             
              } else {
                onPress((x as any)._value / width);
              }
            }}
            backgroundColor="onboardingButtonColor"
            rounded
            size="medium"
          >
            {completed ? "Get Started" : "Next"}
          </Button>
        </SubSliderItem>
      </SubSlider>
    </Box>
  );
};

export default Onboarding;
