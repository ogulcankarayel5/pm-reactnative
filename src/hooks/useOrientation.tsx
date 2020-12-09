
import { Dimensions, PixelRatio } from 'react-native';



export let { width, height } = Dimensions.get('window');

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
export const widthPercentageToDP = (widthPercent: string | number): number => {
    // console.log(width);
    // Parse string percentage input and convert it to number.
    const elemWidth =
        typeof widthPercent === 'number'
            ? widthPercent
            : parseFloat(widthPercent);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.

    return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
export const heightPercentageToDP = (
    heightPercent: string | number
): number => {
    // Parse string percentage input and convert it to number.
    const elemHeight =
        typeof heightPercent === 'number'
            ? heightPercent
            : parseFloat(heightPercent);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};
