import React,{ useState, useEffect } from "react";
import { Dimensions, PixelRatio } from "react-native";



type Orientation = "portrait" | "landscape" | null



export let { width, height } = Dimensions.get("window");

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
export const widthPercentageToDP = (widthPercent: string | number): number => {
  //console.log(width);
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  console.log(PixelRatio.roundToNearestPixel((width * elemWidth) / 100))
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
export const heightPercentageToDP = (heightPercent: string | number): number => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === "number"
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};


export const currentOrientation = ():"portrait" | "landscape" => {
    const isPortrait = height > width ;
    if(isPortrait){
      return "portrait"
    }
    else{
      return "landscape"
    }
  }

  
export const useOrientation = () => {
    const [orientation, setOrientation] = useState<Orientation>(null);
  
    useEffect(() => {
        setOrientation(currentOrientation());
  
      Dimensions.addEventListener("change", (newDimensions) => {
       
        width = newDimensions.window.width;
        height = newDimensions.window.height;
        const orientation: Orientation = width < height ? "portrait" : "landscape";
        setOrientation(orientation); // can be used with this height and width
  
        //console.log(newDimensions.window);
      });
  
      return () => Dimensions.removeEventListener("change", () => {});
    });
  
    return orientation;
  };