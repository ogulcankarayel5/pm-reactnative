import { useItem } from 'hooks';
import React from 'react';
import { ImageBackground, useWindowDimensions } from 'react-native';
import { Box } from 'utils';
import { ItemIcon } from './Item';

export const ItemDetail = ({ route,navigation }: any) => {


    const { id } = route.params;
    const { item } = useItem(id);
    const { width } = useWindowDimensions();
    const {icon,name} = item[0]
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title:name
        });
    }, [navigation,name]);
    
    return (
        <Box flex={1} style={{ backgroundColor: '#1A1A1A' }}>
            <Box
                style={{ backgroundColor: '#151517' }}
                flex={0.4}
                overflow="hidden"
                alignItems="center"
            >
                <ImageBackground
                    style={{ flex: 1,  width: width*1.8,justifyContent:"center",alignItems:"center" }}
                    imageStyle={{opacity:0.1}}
                    resizeMode="cover"
                    source={{
                        uri:
                            'https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1607352632/image_xwtouw.png',
                    }}
                >
                   <ItemIcon name={icon} size={100}/>
                </ImageBackground>
            </Box>
            
        </Box>
    );
};
