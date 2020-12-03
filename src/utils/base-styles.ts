import Constants from 'expo-constants';
import {
    FlexStyle,
    ImageStyle,
    Platform,
    TextStyle,
    ViewStyle
} from 'react-native';
// to choose ios or android style

// const create = (styles: any): {[name: string]: number} => {
//     const platformStyles : any = {};

//     Object.keys(styles).forEach((name) => {
//       let {ios=null, android=null, ...style} = {...styles[name]};
//       if (ios && Platform.OS === 'ios') {
//         style = {...style, ...ios};
//       }
//       if (android && Platform.OS === 'android') {
//         style = {...style, ...android};
//       }
//       platformStyles[name] = style;
//     });
//     return StyleSheet.create(platformStyles);
//   }

// common styles
export const baseStyles: {
    [name: string]: ViewStyle | TextStyle | ImageStyle | FlexStyle;
} = {
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    padding: {
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
};

// export const createStyles = <T extends NamedStyles<T> | NamedStyles<any>>(overrides : T | NamedStyles<T>) => {
//     //const styles = baseStyles();
//     return create({...styles, ...overrides})
//   }
