import LottieView from 'lottie-react-native';
import React from 'react';

export const Loading = () => {
    return (
        <LottieView
            source={require('../assets/loading.json')}
            autoPlay={true}
            loop={true}
        />
    );
};

