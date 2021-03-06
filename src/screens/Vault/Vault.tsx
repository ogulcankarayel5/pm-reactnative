import { heightPercentageToDP } from 'hooks';
import React, { useCallback, useState } from 'react';
import {

    FlatList,
    Platform,
    ScrollView
} from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { getList, VisibilityFilters } from 'store';
import { VaultStackNavigationProps } from 'types';
import { Box } from 'utils';
import { Item } from './Item';
import { AnimatedRightSearch, Search, SearchIconButton } from './Right';
import { StatusComponent } from './Status';

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
        ({ item }) => <Item icon={item.icon} title={item.name} id={item.id}/>,
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
                                
                            />
                        </Box>
                    )}
                </>
            ),
        });
    }, [navigation, focus]);
    return (
        <Box style={{ flex: 1 }}>
          
           <Box style={{ marginTop: 25}}>
               
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
           

            <Box flex={1} marginTop="s">
                <FlatList
                    contentContainerStyle={{paddingBottom:50}}
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




