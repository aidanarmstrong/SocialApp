/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
// import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/root.navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
      <SafeAreaProvider>
          <NavigationContainer>
              <Root/>
          </NavigationContainer>
      </SafeAreaProvider>
  );
};

export default App;
