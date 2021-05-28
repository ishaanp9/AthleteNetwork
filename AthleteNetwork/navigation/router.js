import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreensHandler/LoginScreen';
import TransitionToLoginScreen from '../screens/LoginScreensHandler/TransitionToLoginScreen';


import FeedList from '../screens/FeedList';
import bottomTabHandler from './bottomTabHandler';
import OnboardingSwiper from '../screens/LoginScreensHandler/OnboardingSwiper';
import ChatScreen from '../screens/ChatScreen';


const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name={'Bottom Tab Navigator'}
          component={bottomTabHandler}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Feed List'}
          component={FeedList}
          options={{
            headerShown: false,
          }}
        />
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
        <Stack.Screen
          name={'Login Screen'}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
