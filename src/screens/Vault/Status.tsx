import { useResponsiveProp } from '@shopify/restyle';
import { useFilter } from 'hooks';
import React, { useCallback } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Text, useTheme } from 'utils';
import { TabOptions } from './Vault';


type StatusProps = {
    status:TabOptions
}

export const StatusComponent = ({ status }:StatusProps) => {
    const { getStatus, setStatus } = useFilter(status);
    const handleStatus = useCallback(() => {
        setStatus(status);
    }, [status]);

    const theme = useTheme();
    const scrollViewItemMargin = useResponsiveProp({
        phone: theme.spacing.m * 1.2,
        tablet: theme.spacing.l * 1.25,
    });

    const color = getStatus ? theme.colors.mainForeground : 'white';
    return (
        <TouchableOpacity
            onPress={handleStatus}
            activeOpacity={0.8}
            style={{
                backgroundColor: getStatus ? 'white' : '#48494B',
                marginHorizontal: scrollViewItemMargin,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
            } as ViewStyle}
        >
            <Text variant="status" style={{ color }}>
                {status}
            </Text>
        </TouchableOpacity>
    );
};