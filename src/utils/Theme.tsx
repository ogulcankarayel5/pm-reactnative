import {
    createBox,
    createText,
    ThemeProvider as ReStyleThemeProvider,
    useTheme as useReTheme
} from '@shopify/restyle';
import { widthPercentageToDP } from 'hooks';
import React, { ReactNode } from 'react';
import { NamedStyles } from 'types';

const palette = {
    white: '#FFF',
    white2: '#EDF0F7',
    black: '#111',
    lightBlue: '#346E93',
    red: '#FF0000',
    gray: '#6A6A6A',
    lightGray: '#A7A9AD',
    navyBlue: '#4E5DB2',
    darkBlue: '#263671',
    lightGreen: '#32CD32',
    purple: '#9773FB',
    lightDark: '#131313',
    dark: '#000',
};

const theme = {
    colors: {
        danger: palette.red,
        primary: palette.lightGreen,
        // 1E319D button sign in
        white: palette.white,
        mainBackground: palette.white,
        mainForeground: palette.black,
        mainButtonTextColor: palette.white,
        onboardingButtonColor: palette.lightBlue,
        onboardingButtonTextColor: palette.white,
        primaryTitle: '#0A2648',
        primaryText: '#688AA3',

        disabledButtonColor: '#deded7',
        primaryFormIcon: palette.gray,
        formText: palette.gray,
        formButtonColor: palette.darkBlue,

        facebookColor: '#36529A',
        githubColor: '#24292E',

        primaryAuthText: palette.lightGray,
        authAction: palette.darkBlue,

        primaryPlaceholder: palette.gray,

        primaryInput: palette.white2,

        activeTabBarButton: palette.purple,
        inactiveTabBarButton: palette.gray,

        tabBarColor: palette.lightDark,
        tabBarShadowColor: palette.dark,

        primaryBackgroundColor: '#1A1A1A',
    },
    spacing: {
        none: 0,
        xxs: 2,
        xs: 4,
        s: 8,
        m: 16,
        l: 32,
        xl: 64,
        xxl: 128,
    },
    borderRadii: {
        none: 0,
        s: 8,
        m: 16,
        l: 24,
        xl: 48,
    },
    textVariants: {
        mainTitle: {
            color: 'primaryTitle',
            fontSize: widthPercentageToDP('6%'),

            fontFamily: 'Oswald',
            textAlign: 'center',
        },
        mainText: {
            color: 'primaryText',
            letterSpacing: 1.1,
            fontFamily: 'RobotoRegular',
            fontWeight: '700',
            fontSize: widthPercentageToDP('4%'),
            textAlign: 'center',
        },
        button: {
            color: 'mainButtonTextColor',
            fontSize: widthPercentageToDP('3.75%'),
            fontFamily: 'Oswald',
            fontWeight: 'bold',
        },

        authText: {
            color: 'primaryAuthText',
            fontSize: widthPercentageToDP('3.2%'),
            fontWeight: 'bold',
            textAlign: 'center',
        },

        formTitle: {
            color: 'formText',
            fontSize: widthPercentageToDP('5%'),
            fontFamily: 'Oswald',
            fontWeight: 'bold',
        },
        stackHeader: {
            color: 'white',
            fontSize: widthPercentageToDP('4%'),
            fontFamily: 'Rouge',
            fontWeight: 'bold',
        },
        status: {
            color: 'white',
            fontSize: widthPercentageToDP(3.3),
            fontFamily: 'CrimsonRegular',
        },
    },
    // cardVariants: {
    //   regular: {
    //     // We can refer to other values in the theme here, and use responsive props
    //     padding: {
    //       phone: 's',
    //       tablet: 'm',
    //     },
    //   }
    //   elevated: {
    //     padding: {
    //       phone: 's',
    //       tablet: 'm',
    //     },
    //     shadowColor: '#000',
    //     shadowOpacity: 0.2,
    //     shadowOffset: {width: 0, height: 5},
    //     shadowRadius: 15,
    //     elevation: 5,
    //   }
    // }

    breakpoints: {
        phone: 0,
        tablet: 768,
        largeTablet: 1024,
    },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
    <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export const useTheme = () => useReTheme<Theme>();

// theme objesini component dışında kullanabilmek için

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
    styles: (theme: Theme) => T
) => <T extends NamedStyles<T> | NamedStyles<any>>() => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};
