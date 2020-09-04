       

import React from "react";
import LoadAssets from "./src/components/LoadAssets";
import { ThemeProvider, Box,Text } from "./src/utils/Theme";
import { useOrientation } from './src/hooks/useOrientation';
import { Home } from "./src/components/Home";



//LoadAssets font,navigation ve asset caching için



const fonts = {
  RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
};

const assets = [
  "https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1598991377/2942057-removebg-preview_1_1_no1tjb.png",
  "https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1599030254/2892856-removebg_1_1_vl6gyl.png",
];

export default function App() {
  
  const orientation = useOrientation();
  return (
    <ThemeProvider>
      <LoadAssets {...{ fonts, assets }}>
      <Text>orientation: {orientation}</Text>
      <Home/>
      </LoadAssets>
    </ThemeProvider>
  );
}
