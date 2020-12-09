import { LoadAssets } from 'components';
import { fonts, itemKey, onboarding1, onboarding2 } from 'constants';
import { LoadNavigation } from 'navigation';
import React from 'react';
import { YellowBox } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'utils';

YellowBox.ignoreWarnings(['Require cycle:']);


// tslint:disable-next-line: no-var-requires
const assets = [require('./src/assets/splash.png'), onboarding1, onboarding2,itemKey];

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <LoadAssets {...{ assets, fonts }}>
            <LoadNavigation />
            <FlashMessage position="top" />
          </LoadAssets>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
