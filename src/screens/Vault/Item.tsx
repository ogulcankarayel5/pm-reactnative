import { FontAwesome5 } from '@expo/vector-icons';
// Using Clipboard
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Clipboard, ToastAndroid, TouchableOpacity } from 'react-native';
import { VaultRoutes } from 'types';
import { Box, Text } from 'utils';

export const Item = React.memo(
    ({ icon, title, id }: any) => {
        const navigation = useNavigation<
            StackNavigationProp<VaultRoutes, 'ItemDetail'>
        >();
        const copy = () => {
            Clipboard.setString(title);
            ToastAndroid.showWithGravity(
                'Coppied to clipboard',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        };

        const navigate = () => {
            navigation.navigate('ItemDetail', { id });
        };
        return (
            <Box
                flexDirection="row"
                paddingHorizontal="l"
                justifyContent="space-between"
                alignItems="center"
                style={{ marginTop: 35 }}
            >
                <TouchableOpacity style={{ flex: 1 }} onPress={navigate}>
                    <Box flexDirection="row" alignItems="center">
                        <ItemIcon name={icon} size={28}/>

                        <Box marginLeft="l">
                            <Text variant="stackHeader">{title}</Text>
                            <Text
                                fontSize={15}
                                fontFamily="CrimsonRegular"
                                style={{ color: '#575757' }}
                            >
                                Last update: 03/06/2020
                            </Text>
                        </Box>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={copy}>
                    <FontAwesome5 name="copy" size={28} color="white" />
                </TouchableOpacity>
            </Box>
        );
    },
    (prev, next) => {
        return prev.title === next.title;
    }
);

export const ItemIcon = ({...props}) => {
    return (
        <FontAwesome5 color="white" {...props} />
    )
}



