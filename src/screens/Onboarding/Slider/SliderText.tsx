import React from 'react';
import { Text } from '../../../utils';

type SliderItemProps = {
    children: React.ReactNode;
};
export const SliderTitle = React.memo(
    ({ children, ...props }: SliderItemProps) => {
        return (
            <Text variant="mainTitle" {...props}>
                {children}
            </Text>
        );
    }
);

export const SliderText = React.memo(
    ({ children, ...props }: SliderItemProps) => {
        return (
            <Text mt="s" variant="mainText" {...props}>
                {children}
            </Text>
        );
    }
);
