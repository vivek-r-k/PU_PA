import React from 'react';
import {useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Providers from './navigation';
import SignIn from './screens/Authentication/SignIn'
import SignUp from './screens/Authentication/SignUp'
import Tabs from './navigation/Tabs'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <NavigationContainer>
    //    <Tabs />
    // </NavigationContainer>
    <Providers />
  );
};

export default App;
