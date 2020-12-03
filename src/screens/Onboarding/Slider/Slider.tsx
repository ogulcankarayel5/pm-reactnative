import { useDimensions } from '@react-native-community/hooks';
import React from 'react';
import { Box } from '../../../utils';

type SlideProps = {
    children: React.ReactNode;
};

const Slider = ({ children, ...props }: SlideProps) => {
    const { width } = useDimensions().window;

    return (
        <Box
            width={width}
            justifyContent="center"
            alignItems="center"
            {...props}
        >
            {children}
        </Box>
    );
};

export default Slider;
