import { useDimensions } from "@react-native-community/hooks";
import React, { useCallback, useRef, useState } from "react";
import { Animated, ScrollView } from "react-native";
import { Button, Dot } from "../../components";
import { slides } from "../../data";
import { Box } from "../../utils";
import { Slider, SliderImage, SliderText, SliderTitle } from "./Slider";
import { SubSlider, SubSliderItem } from "./SubSlider";


type OnboardingProps = {
  onDone: () => void;
};

const Onboarding = ({ onDone }: OnboardingProps) => {
  const { width } = useDimensions().window;
  const [completed, setCompleted] = useState<boolean>(false);
  const scroll = useRef<ScrollView>(null);
  
  const x = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  const onPress = useCallback((index: number) => {
    console.log("width: ",width)

    console.log(Math.round(index+1))
    console.log(Math.round((index+1)*width))
    scroll.current.scrollTo({ x: width * (index + 1), animated: true });
  }, []);

  React.useEffect(() => {
    x.addListener(({ value }) => {
      
      //this line should be fixed
      if (Math.round(value / width) === slides.length - 1) {
        setCompleted(true);
      } else {
        setCompleted(false);
      }
    });

    return () => x.removeAllListeners();
  }, []);

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box flex={3}>{renderScroll(scroll, width, x)}</Box>

      {renderSubSlider(x, width, completed, onDone, onPress)}
    </Box>
  );
}

export default Onboarding;



const renderScroll = (scroll:React.MutableRefObject<ScrollView>, width:number, x:Animated.Value) => {
  return (
    <Animated.ScrollView
      showsHorizontalScrollIndicator={false}
      ref={scroll}
      pagingEnabled
      decelerationRate={9}
      snapToAlignment="center"
      snapToInterval={width}
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
        useNativeDriver: true,
      })}
      
      horizontal
      bounces={false}
      contentContainerStyle={{ flexGrow: 1}}
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
  );
};

const renderSubSlider = (x:Animated.Value, width:number, completed:boolean, onDone:() => void, onPress:(index:number) => void) => {
  
  
  return (
    <SubSlider >
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
              onDone();
            } else {
              //this line should be fixed
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
  );
};
