import React from 'react';
import { Animated } from 'react-native';

interface DotProps {
    index: number;
    currentIndex: any;
}
export const Dot = ({ currentIndex, index }: DotProps) => {
    const opacity = currentIndex.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: 'clamp',
    });

    const scale = currentIndex.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1.5, 1],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View
            style={{
                opacity,
                backgroundColor: '#2CB9B0',
                width: 8,
                height: 8,
                borderRadius: 4,
                margin: 4,
                transform: [{ scale }],
            }}
        />
    );
};

Dot.defaultProps = { index: 0, currentIndex: new Animated.Value(0) };

