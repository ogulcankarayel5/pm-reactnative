import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'expo';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
    Animated,
    Easing,
    Keyboard,
    TextInput,
    useWindowDimensions,
    ViewStyle
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { updateSearchKey } from 'store';

type AnimadtedRightSearchProps = {
    children: ReactNode;
    focus: boolean;
};

export const AnimatedRightSearch = ({
    children,
    focus,
}: AnimadtedRightSearchProps) => {
    const { width } = useWindowDimensions();
    const animation = React.useRef<Animated.Value>(new Animated.Value(0))
        .current;

    const config = {
        duration: 60,
        easing: Easing.linear,
        useNativeDriver: false,
    };

    const startAnimation = (value: number) => {
        Animated.timing(animation, {
            toValue: value,
            ...config,
        }).start();
    };
    useEffect(() => {
        if (focus) {
            startAnimation(1);
        } else {
            Keyboard.dismiss();
            startAnimation(0);
        }
    }, [focus]);

    const interpolateWidth = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [width / 9, width - 40],
        extrapolate: 'clamp',
    });
    return (
        <>
            <Animated.View
                style={{
                    padding: focus ? 5 : 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: interpolateWidth,
                    backgroundColor: focus ? '#212131' : 'transparent',
                    borderRadius: 50,
                    marginRight: 20,
                }}
            >
                {children}
            </Animated.View>
        </>
    );
};

type SearchIconButtonProps = {
    icon: Icon;
    onPress: () => void;
    style?: ViewStyle;
};

export const SearchIconButton = ({
    icon,
    onPress,
    ...props
}: SearchIconButtonProps) => {
    return (
        <TouchableOpacity {...{ onPress }} {...props}>
            <AntDesign name={icon} size={24} color="#64646E" />
        </TouchableOpacity>
    );
};

type SearchProps = {
    handleFocus: (value: boolean) => void;
    focus: boolean;
};

export const Search = ({ handleFocus, focus }: SearchProps) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputRef = useRef<TextInput>();
    const { width } = useWindowDimensions();

    const onHandleFocus = (value: boolean) => {
        handleFocus(value);
    };

    // const setValue=(text) => {
    //   dispatch(updateSearchKey(text))
    // }
    const handleValue = (text: string) => {
        setValue(text);
    };
    useEffect(() => {
        dispatch(updateSearchKey(value));
    }, [value]);

    useEffect(() => {
        if (focus) {
            inputRef.current?.focus();
        } else {
            Keyboard.dismiss();

            clearTextState();
        }
    }, [focus]);

    const clearTextState = () => {
        setValue('');
    };
    const onClear = () => {
        inputRef.current?.clear();
        clearTextState();
    };

    const onClose = () => {
        onHandleFocus(false);
    };
    return (
        <>
            {focus && (
                <TouchableOpacity onPress={onClose}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            )}
            {focus && (
                <TextInput
                    ref={inputRef}
                    style={{
                        flex: 1,
                        color: 'white',
                        paddingLeft: 15,
                        fontFamily: 'CrimsonRegular',
                    }}
                    onChangeText={handleValue}
                    placeholder="Type here"
                />
            )}
            {focus && value.length > 0 && (
                <SearchIconButton
                    onPress={onClear}
                    style={{ width: width / 9 }}
                    icon="close"
                />
            )}
        </>
    );
};
