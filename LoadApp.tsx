import React from "react";
import { LoadAssets, LoadNavigation } from "./src/components";
import { fonts, onboarding1, onboarding2 } from "./src/constants";


const assets = [require("./assets/splash.png"), onboarding1, onboarding2];

export const LoadApp = () => {
  return (
    <LoadAssets {...{ assets, fonts }}>
      <LoadNavigation />
    </LoadAssets>
  );
};
