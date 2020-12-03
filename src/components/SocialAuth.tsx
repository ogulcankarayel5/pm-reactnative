import { widthPercentageToDP } from 'hooks';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ChildrenProp } from 'types';
import { Box } from 'utils';

type SocialIconProps = {
   
    size: number;
};

export const SocialIcons = ({ children, ...props }:ChildrenProp) => {
    return (
        <Box flexDirection="row" justifyContent="space-around" {...props}>
            {children}
        </Box>
    );
};
export const SocialIcon = ({ children, size, ...props }: SocialIconProps & ChildrenProp) => {
    return (
        <Box
            width={size}
            height={size}
            padding="s"
            backgroundColor="white"
            borderRadius="l"
            elevation={5}
            justifyContent="center"
            alignItems="center"
            {...props}
        >
            {children}
        </Box>
    );
};

const defaultProps = { size: widthPercentageToDP('12%') };

SocialIcon.defaultProps = defaultProps;

type SocialIconButtonProps = {
    onPress:() => void;
}

export const SocialIconButton = ({ onPress, children, ...props }:SocialIconButtonProps & ChildrenProp) => {
    return (
        <BorderlessButton {...{ onPress }}>
            <SocialIcon {...props}>{children}</SocialIcon>
        </BorderlessButton>
    );
};

SocialIconButton.defaultProps = defaultProps;
