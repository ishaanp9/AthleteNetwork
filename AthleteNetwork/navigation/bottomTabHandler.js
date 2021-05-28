import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedList from '../screens/FeedList';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import ExploreScreen from '../screens/ExploreScreen';
import OpportunitiesScreen from '../screens/OpportunitiesScreen';

import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const bottomTabHandler = props => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabel: () => {
        return null;
      },
    }}>
      <Tab.Screen
        name={'Feed'}// we can change the name later
        component={FeedList} 
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Opportunities'} // we can change the name later
        component={OpportunitiesScreen} 
        options={{
        tabBarIcon: ({color}) => (
            <MaterialIcons name="business-center" size={25} color={color} />
        ),
        }}
      />
      <Tab.Screen
        name={'Add Post'} // we can change the name later
        component={AddPostScreen} 
        options={{
        tabBarIcon: ({color}) => (
            <MaterialIcons name="post-add" size={25} color={color} />
        ),
        }}
      />
      <Tab.Screen
        name={'Explore'} // we can change the name later
        component={ExploreScreen} 
        options={{
        tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="image-search" size={25} color={color} />
        ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default bottomTabHandler;
