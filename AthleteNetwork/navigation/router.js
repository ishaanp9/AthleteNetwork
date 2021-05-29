import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreensHandler/LoginScreen';
import TransitionToLoginScreen from '../screens/LoginScreensHandler/TransitionToLoginScreen';

import PublicFeedList from '../screens/PublicFeedList';
import bottomTabHandler from './bottomTabHandler';
import OnboardingSwiper from '../screens/LoginScreensHandler/OnboardingSwiper';
import ChatScreen from '../screens/ChatScreen';
// import SignupScreen from '../screens/LoginScreensHandler/SignupScreen';


const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Onboarding Swiper'}>
        <Stack.Screen
          name={'Onboarding Swiper'}
          component={OnboardingSwiper}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Login Transition Screen'}
          component={TransitionToLoginScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name={'Signup Screen'}
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name={'Login Screen'}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name={'Bottom Tab Navigator'}
          component={bottomTabHandler}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Public Feed List'}
          component={PublicFeedList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
         name={'Chat Screen'}
         component={ChatScreen} 
         options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
