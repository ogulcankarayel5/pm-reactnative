import { useDimensions } from '@react-native-community/hooks';
import React from 'react';
import { Image } from 'react-native';

interface SliderImageProps {
    src: string;
}

export const SliderImage = ({
    src = 'https://res.cloudinary.com/ogulcankarayel-digital/image/upload/v1598991377/2942057-removebg-preview_1_1_no1tjb.png',
}: SliderImageProps) => {
    const { width, height } = useDimensions().window;
    const aspect = height / width;

    return (
        <Image
            source={{ uri: src }}
            style={{
                width,
                height: (aspect * width) / 1.8,
                resizeMode: 'contain',
            }}
        />
    );
};
