import { useResponsiveProp } from '@shopify/restyle';
import { Icon } from 'components';
import { useItem } from 'hooks';
import React from 'react';
import { Dimensions, ImageBackground, ScrollView } from 'react-native';
import { ChildrenProp } from 'types';
import { Box, Text } from 'utils';
import {
    ItemBodyContainer,
    ItemContainer,
    ItemIcon,
    ItemIconContainer,
    ItemText,
    ItemTextContainer,
    ItemTitle
} from './Item';
import { TagContainer } from './Status';

const {width:backgroundWidth} = Dimensions.get("screen");

const detailList = [
    {
        id: 1,
        title: 'ID / Username',
        leftIcon: <Icon name="person" />,
        rightIcon: <Icon name="copy"/>,
    },
    {
        id: 2,
        title: 'Password',
        leftIcon: <Icon name="key" />,
        rightIcon: <Icon name="copy" />,
    },
    {
        id: 3,
        title: 'App',
        leftIcon: <Icon name="link" />,
        rightIcon: <Icon name="share-alt"   />,
    },
    {
        id: 4,
        title: 'Notes',
        leftIcon: <Icon name="text"  />,
        rightIcon: <ItemIcon name="angle-down" />,
    },
    {
        id: 5,
        title: 'Tags',
        leftIcon: <Icon name="pricetags"  />,
        tag: 'Social',
    },
];

export const ItemDetail = ({ route, navigation }: any) => {
    const { id } = route.params;
    const { item } = useItem(id);
    const iconSize = useResponsiveProp({
        phone:50,
        tablet:120
    })

    const { icon, name } = item[0];
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, [navigation, name]);

    return (
        <ItemDetailContainer>
            <ItemImageContainer>
                <ItemImage>
                <ItemIcon name={icon} size={iconSize} />
                </ItemImage>
            </ItemImageContainer>
            <ItemInfoContainer>
                <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                    {detailList.map((item, index) => {
                        const showTag = item.tag?.length! > 0;

                        return (
                            <ItemContainer key={index}>
                                <ItemBodyContainer>
                                    <ItemIconContainer>
                                        {item.leftIcon}
                                    </ItemIconContainer>
                                    <ItemTextContainer alignItems="flex-start">
                                        <ItemTitle>
                                            {item.title as string}
                                        </ItemTitle>
                                        {showTag ? (
                                            <TagContainer
                                                style={{
                                                    backgroundColor: 'gray',
                                                    marginTop: 10,
                                                    paddingVertical: 5,
                                                }}
                                            >
                                                <Text variant="status">
                                                    {item.tag}
                                                </Text>
                                            </TagContainer>
                                        ) : (
                                            <ItemText>12345</ItemText>
                                        )}
                                    </ItemTextContainer>
                                </ItemBodyContainer>
                                <ItemIconContainer>
                                    {item.rightIcon ? item.rightIcon : null}
                                </ItemIconContainer>
                            </ItemContainer>
                        );
                    })}
                </ScrollView>
            </ItemInfoContainer>
        </ItemDetailContainer>
    );
};

const ItemDetailContainer = ({ children }: ChildrenProp) => {
    return (
        <Box flex={1}>
            {children}
        </Box>
    );
};

const ItemImageContainer = ({ children }: ChildrenProp) => {
    return (
        <Box
            backgroundColor="itemDetailImageBackgroundColor"
            flex={1}
            overflow="hidden"
            alignItems="center"
          
            
        >
            {children}
        </Box>
    );
};

const ItemImage = ({ children }:ChildrenProp) => {
    
    return (
      
            <ImageBackground
            style={{
                flex: 1,
               width: backgroundWidth*1.8,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            imageStyle={{ opacity: 0.1 }}
            resizeMethod="resize"
            resizeMode="cover"
            source={{
                uri:
                    'https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1607352632/image_xwtouw.png',
            }}
        >
            {children}
        </ImageBackground>
      
    );
};

const ItemInfoContainer = ({ children }:ChildrenProp) => {
    return <Box flex={2}>{children}</Box>;
};

