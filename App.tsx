import React from "react";
import { LoadAssets, LoadNavigation } from "./src/components";
import { fonts, onboarding1, onboarding2 } from "./src/constants";
import { ThemeProvider } from "./src/utils";



//LoadAssets font,navigation ve asset caching için

const assets = [
  onboarding1,
  onboarding2,
];


export default function App() {
 
  return (
    <ThemeProvider>
      <LoadAssets {...{ assets, fonts }}>
       <LoadNavigation/>
     </LoadAssets>
    </ThemeProvider>
  );
}
