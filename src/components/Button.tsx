import { useDimensions } from '@react-native-community/hooks';
import React from 'react';
import {
    ImageStyle,
    StyleSheet,
    TextStyle,
    TouchableOpacityProps,
    ViewStyle
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { baseStyles, Text, Theme, useTheme } from 'utils';

const styles = StyleSheet.create({
    container: {
        ...baseStyles.center,
    },
});

type Size = 'small' | 'medium' | 'large';
export type Style = ViewStyle;
interface ButtonProps extends TouchableOpacityProps {
    onPress: () => void;
    children: string;
    color?: keyof Theme['colors'];
    backgroundColor?: keyof Theme['colors'];
    size?: Size;
    rounded?: boolean;
    style?: Style;
}

// default color white,it comes from variant in theme
// should be added icon in future
export const Button = React.memo(
    ({
        children,
        onPress,
        color,
        backgroundColor,
        size,
        rounded,
        style,
        ...props
    }: ButtonProps) => {
        const { width: wWidth } = useDimensions().window;

        const theme = useTheme();

        const bgColor = theme.colors[backgroundColor!];

        // if size didn't come from props it will be null
        const width =
            size && size === 'small'
                ? wWidth / 4.5
                : size === 'medium'
                ? wWidth / 3
                : size === 'large'
                ? wWidth / 2
                : null;

        const borderRadius = rounded
            ? theme.borderRadii.xl
            : theme.borderRadii.none;

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                {...props}
                style={[
                    styles.container,
                    {
                        borderRadius,
                        padding: theme.borderRadii.m,
                        backgroundColor: bgColor,
                        width,
                    }as ViewStyle,
                    { ...style },
                ]}
            >
                <Text variant="button" {...{ color }}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    }
);

