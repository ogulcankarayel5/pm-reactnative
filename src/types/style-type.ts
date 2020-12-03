import { FlexStyle, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Box, Text } from 'utils';

export type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle | FlexStyle;
};
export type Orientation = 'portrait' | 'landscape';
export type BaseProps = React.ComponentProps<typeof Box>;
export type BaseTextProps = React.ComponentProps<typeof Text>;

export interface IFormValues {
    email: string;
    password: string;
}
