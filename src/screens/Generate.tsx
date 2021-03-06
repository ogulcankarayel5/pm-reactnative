import Slider from '@react-native-community/slider';
import { Button, Icon } from 'components';
import React, { useState } from 'react';
import { ScrollView, Switch } from 'react-native';
import { Box, Text } from 'utils';

export const Generate = () => {
    const [value, setValue] = useState<number>(12);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <Box flex={1} paddingHorizontal="m" >
            <Box  flex={0.3} >
                <Text style={{ color: '#5A5A5A' }}>Generated Password</Text>
                <Box flex={1} flexDirection="row">
                    <Box
                        flex={3.5}
                        style={{
                            backgroundColor: '#1F2022',
                            alignItems: 'center',
                        }}
                    >
                        <ScrollView
                            horizontal
                            contentContainerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexGrow: 1,
                            }}
                        >
                            <Text color="activeTabBarButton">deneme</Text>
                        </ScrollView>
                    </Box>
                    <Box
                   
                        flex={1}
                        alignItems="center"
                        justifyContent="center"
                        style={{ backgroundColor: '#2D2E30' }}
                        
                    >
                        <Icon name="copy" color="#A8A9AB" />
                    </Box>
                </Box>
            </Box>
            <Box mt="m" >
                <Text variant="itemText" >
                    <Text style={{ color: '#5A5A5A' }}>Length:</Text>
                    {value}
                </Text>
                <Box
                    padding="m"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ backgroundColor: '#1F2022' }}
                >
                    <Text variant="itemText">06</Text>
                    <Slider
                        step={1}
                        style={{ width: 250 }}
                        value={12}
                        minimumValue={6}
                        maximumValue={42}
                        minimumTrackTintColor="#434344"
                        maximumTrackTintColor="#434344"
                        thumbTintColor="#9773FB"
                        onValueChange={(value) => setValue(value)}
                    />
                    <Text variant="itemText">42</Text>
                </Box>
            </Box>

            <Box mt="m" >
                <Box >
                    <Text style={{ color: '#5A5A5A' }}>SETTINGS</Text>
                    <Box
                        padding="m"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{ backgroundColor: '#1F2022' }}
                    >
                        <Text variant="itemText">Include numbers</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9773FB' }}
                            thumbColor="#f4f3f4"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </Box>
                </Box>
                <Box >
                    <Box
                        padding="m"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{ backgroundColor: '#1F2022' }}
                    >
                        <Text variant="itemText">Include numbers</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9773FB' }}
                            thumbColor="#f4f3f4"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </Box>
                </Box>

                <Box>
                    <Box
                        padding="m"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{ backgroundColor: '#1F2022' }}
                    >
                        <Text variant="itemText">Include numbers</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9773FB' }}
                            thumbColor="#f4f3f4"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </Box>
                </Box>

            
                 <Button  rounded style={{borderWidth:1,borderColor:'#9773FB',backgroundColor:'transparent' }} color="white" onPress={()=>true}>
                     Generate Password
                 </Button>
          
              
            </Box>
        </Box>
    );
};
