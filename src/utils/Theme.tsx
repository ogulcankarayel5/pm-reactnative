
import React,{ ReactNode } from "react";
import { createText, createBox,useTheme as useReTheme,ThemeProvider as ReStyleThemeProvider } from "@shopify/restyle";
import { widthPercentageToDP } from "../hooks/useOrientation";

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',
  
    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',
  
    black: '#0B0B0B',
    white: '#F0F2F3',
  };

  const theme = {
    colors: {
     
    },
    spacing: {
    
    },
    borderRadii: {
      s:widthPercentageToDP("5%") // it must be updated when orientation changes
    },
    textVariants: {
     
    },
    breakpoints: {
      phone: 0,
      tablet: 768,
    },
  };

export const ThemeProvider = ({children}:{children:ReactNode}) => (
  <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>
)

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();
