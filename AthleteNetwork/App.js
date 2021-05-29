//import react-native-vector-icons
//import bottom tab navigator
//import material ui
//import react-native-navigation (go through docs)
//import react-native-onboarding-swiper
//npm install --save react-native-see-more-inline
//npm add react-native-text-size
//npm install react-native-elements
//npm install react-navigation

import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Router from './navigation/router';
import ChatScreen from './screens/ChatScreen';
import TransitionToLoginScreen from './screens/LoginScreensHandler/TransitionToLoginScreen';
import VideoPostItem from './components/VideoPostItem';


const App = (props) => {
  return (
    <>
      {/* <Router/>  */}
      {/* <ChatScreen/> */}
      <VideoPostItem/>
    </>
  );
};

export default App;

