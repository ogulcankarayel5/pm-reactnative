import React from 'react';
import { BaseProps } from '../../../types';
import { Box } from '../../utils';

type Props = BaseProps & { children: React.ReactNode };

export const SubSlider = ({ children, ...props }: Props) => {
    return (
        <Box
            flex={1}
            justifyContent="space-evenly"
            alignItems="center"
            {...props}
        >
            {children}
        </Box>
    );
};

export const SubSliderItem = ({ children, ...props }: Props) => {
    return (
        <Box flexDirection="row" {...props}>
            {children}
        </Box>
    );
};
