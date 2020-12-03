import React, { ReactNode } from 'react';
import * as Animatable from 'react-native-animatable';

type ErrorProps = {
    children: ReactNode;
    error?: boolean;
};

// if error prop is not different from the previous one,Error component shouldn't be re-render
export const Error = React.memo(
    ({ children, error = false, ...props }: ErrorProps) => {
        return (
            <Animatable.View
                animation={error ? 'fadeIn' : 'bounceIn'}
                {...props}
            >
                {children}
            </Animatable.View>
        );
    },
    (prevProps, nextProps) => {
        if (prevProps.error === nextProps.error) {
            return true;
        }
        return false;
    }
);


