import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChildrenProp } from 'types';


type TabSecondaryButtonProps = {
    visible:boolean
    xPosition:number,
    yPosition:number,
    onPress:() => void
}
export const TabSecondaryButton = ({
    visible,
    xPosition,
    yPosition,
    children,
    onPress,
}:TabSecondaryButtonProps & ChildrenProp) => {
    const mode = useRef(new Animated.Value(0)).current;
    const windowWidth = useWindowDimensions().width;

    // when visible property changes animation starts or out. Visible state is handled by handlePress function in primary button
    useEffect(() => {
        const animation = Animated.spring(mode, {
            toValue: visible ? 1 : 0,
            useNativeDriver: false,
        });

        animation.start();

        return () => animation.stop();
    }, [visible]);

    // should be added a formula to calculate x position in a proper way
    const leftPosition = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [windowWidth / 2 - 22, windowWidth / 2 - 22 + xPosition],
    });

    const topPosition = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, yPosition],
    });

    return (
        <Animated.View
            style={[
                styles.secondaryView,
                { left: leftPosition, top: topPosition },
            ]}
        >
            <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
                {children}
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    secondaryButton: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,

        height: 40,
    },
    secondaryView: {
        position: 'absolute',
        backgroundColor: '#7F58FF',
        borderRadius: 50,
    },
});
