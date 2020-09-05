import { Platform,StyleSheet } from "react-native";
import { makeStyles, Theme } from "./Theme";

//to choose ios or android style

const create = (styles: any): {[name: string]: number} => {
    const platformStyles : any = {};
    
    Object.keys(styles).forEach((name) => {
      let {ios=null, android=null, ...style} = {...styles[name]};
      if (ios && Platform.OS === 'ios') {
        style = {...style, ...ios};
      }
      if (android && Platform.OS === 'android') {
        style = {...style, ...android};
      }
      platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
  }


//common styles 
const baseStyles =makeStyles((theme:Theme) => ({
    
    
      
}))


  
export const createStyles = (overrides = {}) => {
    return create({...baseStyles, ...overrides})
  }

