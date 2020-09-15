import { ViewStyle, TextStyle, ImageStyle, FlexStyle } from "react-native";

export type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle|FlexStyle };