import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { baseStyles, Box, useTheme } from "../../utils";

export const TabPrimaryButtonContainer = ({children,...props}) => {

    const theme = useTheme()
    const borderRadius = theme.borderRadii.xl + 2
    const padding= theme.spacing.xxs + 2
    const marginTop = (-(theme.spacing.m * 3))+3
    return (
      <Box style={{...baseStyles.center,borderRadius,padding,marginTop}}   backgroundColor="tabBarShadowColor" {...props} >
        {children}
      </Box>
    )
}
export const TabPrimaryButton = ({ visible, rotationDegrees, handlePress, children }) => {

 
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.spring(animatedValue, {
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
    });

    animation.start();

    return () => animation.stop();
  }, [visible]);

  const sizeStyle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.95, 1],
  });

  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", `${rotationDegrees ?? 180}deg`],
  });

  return (
   
      <Animated.View style={[{ transform: [{ scale: sizeStyle }] }]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={handlePress}
          style={styles.primaryButton}
        >
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            {children}
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
   
  );
};

const styles = StyleSheet.create({
    
    primaryButton: {
      
      borderRadius: 50,
      width: 68,
      height: 68,
  
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#7F58FF",
    },
   
  });
  