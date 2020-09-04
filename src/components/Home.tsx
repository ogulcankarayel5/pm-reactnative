import React from 'react'
import { useTheme, Box,Text } from './../utils/Theme';

import { heightPercentageToDP, useOrientation,widthPercentageToDP } from './../hooks/useOrientation';
import { StyleSheet } from 'react-native';


export const Home = ({}) => {

  
    const theme = useTheme();
    
    console.log(theme.borderRadii.s)
    let styles = getStyles(widthPercentageToDP, heightPercentageToDP);
        return (

        <Box style={{backgroundColor:"red"}} flex={1} justifyContent="center" alignItems="center">
            <Text style={styles.text}>heyy</Text>
           
        </Box>
        );
}

const getStyles= (widthPercentageToDP:any,heightPercentageToDP:any) => {
    return StyleSheet.create({

        text:{
            fontSize:widthPercentageToDP("25%")
        }
    })
}

