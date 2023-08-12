import {View, Text} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/welcomescreen';
import LanguageSelect from './src/screens/languageSelect';
import ContentRead from './src/screens/contentRead';
import MyStack from './src/navigation/stackNavigation';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      {/* <WelcomeScreen /> */}
      {/* <LanguageSelect /> */}
      {/* <ContentRead /> */}
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
