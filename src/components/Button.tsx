import { BaseTheme,  useResponsiveProp,ResponsiveValue } from '@shopify/restyle';
import React from 'react'
import {StyleSheet} from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { Box, Text, Theme,baseStyles, useTheme } from '../utils';



const styles = StyleSheet.create({
    container:{
        ...baseStyles.center
    }
})
interface ButtonProps {
    onPress:() => void;
    label:string;
    color?:keyof Theme["colors"],
    backgroundColor:keyof Theme["colors"];
    padding?:ResponsiveValue<keyof Theme["spacing"],Theme>;
    borderRadius?:ResponsiveValue<keyof Theme["borderRadii"],Theme>;

}


//default color white,it comes from variant in theme
export const Button = ({onPress,label,color,backgroundColor,padding,borderRadius,...props}:ButtonProps) => {
   
    const theme = useTheme();
    
   

        return (

            <RectButton  onPress={onPress}>
               <Box style={[styles.container,{...props}]} {...{padding,borderRadius,backgroundColor}}>
                
               <Text variant="button" {...{color}}>
                    {label}
                </Text>
               </Box>
            </RectButton>
        );
}

Button.defaultProps = {
    
    padding:{phone:"s",tablet:"m"},
    borderRadius:"l",
    width:200
}




