/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import type {Node} from 'react';
// import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/root.navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider, useDispatch} from 'react-redux';
import configureStore from './src/store/store';
import {SetCurrentScreen} from './src/actions/nav.actions';

// LogBox.ignoreLogs(['Warning: ...']);

const store = configureStore();

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
      <Provider store={store}>
          <Root/>
      </Provider>
  );
};

export default App;
