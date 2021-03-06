import { FontAwesome5 } from '@expo/vector-icons';
// Using Clipboard
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useResponsiveProp } from '@shopify/restyle';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BaseProps, BaseTextProps, ChildrenProp, VaultRoutes } from 'types';
import { Box, notify, Text } from 'utils';


export const Item = React.memo(
    ({ icon, title, id }: any) => {
        const navigation = useNavigation<
            StackNavigationProp<VaultRoutes, 'ItemDetail'>
        >();

       
        const copy = () => {
           notify(title)
        };

        const navigate = () => {
            navigation.navigate('ItemDetail', { id });
        };



        return (
            <ItemContainer>
                <TouchableOpacity style={{ flex: 1 }} onPress={navigate}>
                    <ItemBodyContainer>
                        <ItemIconContainer>
                            <ItemIcon name={icon} />
                        </ItemIconContainer>
                        <ItemTextContainer>
                            <ItemTitle>{title}</ItemTitle>
                            <ItemText>Last update : 06/10/2020</ItemText>
                        </ItemTextContainer>
                    </ItemBodyContainer>
                </TouchableOpacity>

                <ItemIconContainer >
                    <TouchableOpacity onPress={copy}>
                        <ItemIcon name="copy"  />
                    </TouchableOpacity>
                </ItemIconContainer>
            </ItemContainer>
        );
    },
    (prev, next) => {
        return prev.title === next.title;
    }
);





type ItemProps = ChildrenProp & BaseProps;

export const ItemContainer = ({ children, ...props }: ItemProps) => {
    return (
        <Box
            flexDirection="row"
            paddingHorizontal="l"
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: 35 }}
            {...props}
        >
            {children}
        </Box>
    );
};

export const ItemBodyContainer = ({ children, ...props }: ItemProps) => {
    return (
        <Box flexDirection="row" alignItems="center" flex={1} {...props}>
            {children}
        </Box>
    );
};

export const ItemIconContainer = ({ children, ...props }: ItemProps) => {
    return (
        <Box flex={0.2} alignItems="center" {...props}>
            {children}
        </Box>
    );
};

export const ItemIcon = ({ ...props }) => {


    const iconSize = useResponsiveProp({
        phone:28,
        tablet:56
    })
    return <FontAwesome5 color="white" size={iconSize} {...props} />;
};


export const ItemTextContainer = ({ children, ...props }: ItemProps) => {
    return (
        <Box flex={0.8}  {...props}>
            {children}
        </Box>
    );
};

type TextProps = {
    children: string;
};

type ItemTextProps = TextProps & BaseTextProps;

export const ItemTitle = ({ children, ...props }: ItemTextProps) => {
    return (
        <Text variant="itemText" {...props}>
            {children}
        </Text>
    );
};

export const ItemText = ({ children, ...props }: ItemTextProps) => {
    return (
        <Text numberOfLines={3} ellipsizeMode="tail" variant="itemSecondaryText" {...props}>
            {children}
        </Text>
    );
};
