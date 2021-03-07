import {
    Feather,
    FontAwesome5,
    Foundation,
    Ionicons
} from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useResponsiveProp } from '@shopify/restyle';
import { heightPercentageToDP } from 'hooks';
import React, { ReactNode, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { ChildrenProp } from 'types';
import { Box, Theme } from 'utils';
import {
    TabPrimaryButton,
    TabPrimaryButtonContainer
} from './TabPrimaryButton';
import { TabSecondaryButton } from './TabSecondaryButton';

const childButtons = [
    {
        icon: <Feather name="lock" size={24} color="#FFF" />,
        onPress: () => alert('hey'),
        xPosition: 60,
        yPosition: -75,
    },
    {
        icon: <Foundation name="clipboard-notes" size={24} color="#FFF" />,
        onPress: () => true,
        xPosition: -60,
        yPosition: -75,
    },
];

export function TabBar({
    state,
    descriptors,
    navigation,
    ...props
}: BottomTabBarProps) {
    const { activeBackgroundColor, inactiveBackgroundColor } = props;

    // state for add button
    const [visible, setVisible] = useState(false);

    const handlePress = () => {
        setVisible((prevState) => !prevState);
    };

    return (
        <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-around"
            backgroundColor="tabBarShadowColor"
            height={heightPercentageToDP(8)}
            style={{
                shadowOpacity: 0.1,
                shadowRadius: 20,
                elevation: 2,
                
            }}
        >
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return label === 'Vault' ? (
                    <TabBarButton key={label} {...{ onPress }}>
                        <Icon
                            name="home"
                            color={
                                (isFocused
                                    ? activeBackgroundColor
                                    : inactiveBackgroundColor) as keyof Theme['colors']
                            
                            }
                            size={heightPercentageToDP(5)}
                        />
                    </TabBarButton>
                ) : label === 'Add' ? (
                    <TabAddButtonContainer
                        key={label}
                        primaryButton={
                            <TabPrimaryButtonContainer>
                                <TabPrimaryButton
                                    rotationDegrees={45}
                                    {...{ handlePress, visible }}
                                >
                                    <FontAwesome5
                                        name="plus"
                                        size={24}
                                        color="#FFF"
                                    />
                                </TabPrimaryButton>
                            </TabPrimaryButtonContainer>
                        }
                    >
                        {childButtons.map(
                            ({ icon, onPress, xPosition, yPosition }) => (
                                <TabSecondaryButton
                                    key={xPosition}
                                    {...{
                                        visible,
                                        xPosition,
                                        yPosition,
                                        onPress,
                                    }}
                                >
                                    {icon}
                                </TabSecondaryButton>
                            )
                        )}
                    </TabAddButtonContainer>
                ) : (
                    <TabBarButton key={label} {...{ onPress }}>
                        <Icon
                            color={
                                (isFocused
                                    ? activeBackgroundColor
                                    : inactiveBackgroundColor) as keyof Theme['colors']
                            }
                            name="lock"
                            size={heightPercentageToDP(5)}
                        />
                    </TabBarButton>
                );
            })}
        </Box>
    );
}

type TabBarButtonProps = {
    children: ReactNode;
    onPress: () => void;
};
const TabBarButton = ({
    children,
    onPress,
    ...props
}: TabBarButtonProps & ChildrenProp) => {
    return (
        <TouchableOpacity style={{zIndex:3}} {...{ onPress }} {...props}>
            {children}
        </TouchableOpacity>
    );
};

type TabAddButtonContainer = {
    primaryButton: ReactNode;
};
const TabAddButtonContainer = ({
    primaryButton,
    children,
    ...props
}: TabAddButtonContainer & ChildrenProp) => {
    return (
        <Box {...StyleSheet.absoluteFillObject} alignItems="center" {...props}>
            {children}
            {primaryButton}
        </Box>
    );
};

type IconProps = {
    name: string;
    color?:string;
    size?:number
};
export const Icon = ({ name,size,color='white',...props }: IconProps) => {
    const iconSize = useResponsiveProp({
        phone: 28,
        tablet: 56,
    });
    return (
        <Ionicons
            name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${name}`}
            size={size ? size : iconSize as number}
            color={color}
            
            {...props}
            
        />
    );
};
