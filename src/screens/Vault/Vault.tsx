import { FontAwesome5 } from '@expo/vector-icons';
import { useResponsiveProp } from '@shopify/restyle';
import { heightPercentageToDP, useFilter } from 'hooks';
import React, { useCallback, useState } from 'react';
import {
    FlatList,
    Platform,
    ScrollView,
    TouchableOpacity,
    ViewStyle
} from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { getList, VisibilityFilters } from 'store';
import { VaultStackNavigationProps } from 'types';
import { Box, Text, useTheme } from 'utils';
import { AnimatedRightSearch, Search, SearchIconButton } from './Right';

export type TabOptions = typeof VisibilityFilters.SHOW_ALL | typeof VisibilityFilters.SHOW_SOCIAL | typeof VisibilityFilters.SHOW_MASTER_PASSWORDS ;


const listTabs = [
    { status: VisibilityFilters.SHOW_ALL },
    { status: VisibilityFilters.SHOW_SOCIAL },
    { status: VisibilityFilters.SHOW_MASTER_PASSWORDS },
];

export const Vault = ({ navigation }: VaultStackNavigationProps<'Vault'>) => {
    const filteredData = useSelector(getList, shallowEqual);
    const [focus, setFocus] = useState(false);

    const getItemLayout = useCallback(
        (_, index) => ({
            length: heightPercentageToDP(7.5),
            offset: heightPercentageToDP(7.5) * index,
            index,
        }),
        []
    );
    const keyExtractor = useCallback((_, i) => i.toString(), []);

    const renderItem = useCallback(
        ({ item }) => <Item icon={item.icon} title={item.name} />,
        []
    );

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>
                    <AnimatedRightSearch focus={focus}>
                        <Search handleFocus={setFocus} focus={focus} />
                    </AnimatedRightSearch>
                    {!focus && (
                        <Box position="absolute">
                            <SearchIconButton
                                onPress={() => setFocus(true)}
                                icon="search1"
                                style={{ marginRight: 5 }}
                            />
                        </Box>
                    )}
                </>
            ),
        });
    }, [navigation, focus]);
    return (
        <Box style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
            <Box style={{ marginTop: 25 }}>
                <ScrollView
                    style={{
                        paddingHorizontal: Platform.OS === 'android' ? 20 : 0,
                    }}
                    horizontal={true}
                    contentInset={{ top: 0, left: 5, right: 5, bottom: 0 }}
                    snapToAlignment="center"
                    scrollEnabled={true}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {listTabs.map((item, index) => {
                        return (
                            <StatusComponent status={item.status} key={index} />
                        );
                    })}
                </ScrollView>
            </Box>

            <Box flex={1} marginTop="l">
                <FlatList
                    getItemLayout={getItemLayout}
                    updateCellsBatchingPeriod={35}
                    windowSize={13}
                    initialNumToRender={8}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews={true}
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </Box>
        </Box>
    );
};



type StatusProps = {
    status:TabOptions
}

const StatusComponent = ({ status }:StatusProps) => {
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
                marginHorizontal: scrollViewItemMargin as ViewStyle['marginHorizontal'],
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text variant="status" style={{ color }}>
                {status}
            </Text>
        </TouchableOpacity>
    );
};

const Item = React.memo(
    ({ icon, title }: any) => {
        return (
            <Box
                flexDirection="row"
                paddingHorizontal="l"
                justifyContent="space-between"
                alignItems="center"
                style={{ marginTop: 35 }}
            >
                <Box flexDirection="row" alignItems="center" flex={1}>
                    {icon}

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
                <FontAwesome5 name="copy" size={28} color="white" />
            </Box>
        );
    },
    (prev, next) => {
        if (prev.title === next.title) {
            return true;
        }
    }
);
