//import react-native-vector-icons
//import bottom tab navigator
//import material ui
//import react-native-navigation (go through docs)
//import react-native-onboarding-swiper
//npm install --save react-native-see-more-inline
//npm add react-native-text-size
//npm install react-native-elements

import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Router from './navigation/router';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreensHandler/LoginScreen';

const App = (props) => {
  return (
    <>
      {/* <Router/> */}
      <ChatScreen/>
    </>
  );
};

export default App;

