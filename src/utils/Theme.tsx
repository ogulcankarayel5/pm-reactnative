
import { createBox, createText, ThemeProvider as ReStyleThemeProvider, useTheme as useReTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { widthPercentageToDP } from "../hooks/useOrientation";
import { NamedStyles } from "../types";

const palette = {
 
  white: '#FFF',
  black: '#111',
  lightBlue:"#346E93",
  lightGray: '#EEE',
  };

  const theme = {
    colors: {
      mainBackground: palette.white,
      mainForeground: palette.black,
      mainButtonTextColor:palette.white,
      onboardingButtonColor : palette.lightBlue,
      onboardingButtonTextColor:palette.white,
      primaryTitle:"#0A2648",
      primaryText:"#688AA3",
      purple:"#412390",
     
    
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
      none:0,
      s:8 ,
      m:16,
      l:24,
      xl:48
    },
    textVariants:{
      mainTitle:{
        color:"primaryTitle",
        fontSize:widthPercentageToDP("6%"),
       
        fontFamily:"Oswald",
        textAlign:"center"
      },
      mainText:{
        color:"primaryText",
        letterSpacing:1.1,
        fontFamily:"RobotoRegular",
        fontWeight:"700",
        fontSize:widthPercentageToDP("4%"),
        textAlign:"center"
      },
      button:{
        color:"mainButtonTextColor",
        fontSize:widthPercentageToDP("3.75%"),
        fontFamily:"Oswald",
        fontWeight:"bold"
      }
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


export const makeStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: (theme: Theme) => T
) =>  <T extends NamedStyles<T> | NamedStyles<any>>() => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};