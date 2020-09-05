
import React,{ ReactNode } from "react";
import { createText, createBox,useTheme as useReTheme,ThemeProvider as ReStyleThemeProvider } from "@shopify/restyle";
import { widthPercentageToDP } from "../hooks/useOrientation";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

const palette = {
  purple: '#5A31F4',
  white: '#FFF',
  black: '#111',
  darkGray: '#333',
  lightGray: '#EEE',
  };

  const theme = {
    colors: {
      mainBackground: palette.lightGray,
      mainForeground: palette.black,
  
      primaryCardBackground: palette.purple,
      secondaryCardBackground: palette.white,
      primaryCardText: palette.white,
      secondaryCardText: palette.black,
    },
    spacing: {
      none: 0,
      xxs: 2,
      xs:4,
      s: 8,
      m: 16,
      l: 32,
      xl:64,
      xxl: 128
    },
    borderRadii: {
      s:8 ,
      m:16,
      l:24,
      xl:48
    },
    // cardVariants: {
    //   regular: {
    //     // We can refer to other values in the theme here, and use responsive props
    //     padding: {
    //       phone: 's',
    //       tablet: 'm',
    //     },
    //   }
    //   elevated: {
    //     padding: {
    //       phone: 's',
    //       tablet: 'm',
    //     },
    //     shadowColor: '#000',
    //     shadowOpacity: 0.2,
    //     shadowOffset: {width: 0, height: 5},
    //     shadowRadius: 15,
    //     elevation: 5,
    //   }
    // }
    textVariants: {
     
    },
    breakpoints: {
      phone:0,
      tablet: 768,
      largeTablet: 1024,
    },
  };

export const ThemeProvider = ({children}:{children:ReactNode}) => (
  <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>
)

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();


//theme objesini component dışında kullanabilmek için
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};