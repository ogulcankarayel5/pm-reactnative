import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BaseProps, BaseTextProps } from 'types';
import { Box, Text } from 'utils';

type FooterProps = BaseProps & {
    children: ReactNode;
};

export const Footer = ({ children, ...props }: FooterProps) => {
    return (
        <Box flex={1} justifyContent="space-around" mt="m" {...props}>
            {children}
        </Box>
    );
};

type FooterTextProps = BaseTextProps & {
    children: string;
};
export const FooterText = ({ children, ...props }: FooterTextProps) => {
    return (
        <Text mb="m" variant="authText" {...props}>
            {`-${children}-`}
        </Text>
    );
};

type FooterActionProps = {
    onPress: () => void;
    title: string;
    action: string;
};

export const FooterAction = ({ onPress, title, action }: FooterActionProps) => {
    return (
        <TouchableWithoutFeedback {...{ onPress }}>
            <Text variant="authText">
                {title}
                <Text ml="xl" color="authAction">
                    {action}
                </Text>
            </Text>
        </TouchableWithoutFeedback>
    );
};
