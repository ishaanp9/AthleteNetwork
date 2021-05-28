import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedList from '../screens/FeedList';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import ExploreScreen from '../screens/ExploreScreen';
import OpportunitiesScreen from '../screens/OpportunitiesScreen';


import Icon from 'react-native-vector-icons/MaterialIcons';



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
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Opportunities'} // we can change the name later
        component={OpportunitiesScreen} 
        options={{
        tabBarIcon: ({color}) => (
            <Icon name="business-center" size={25} color={color} />
        ),
        }}
      />
      <Tab.Screen
        name={'Add Post'} // we can change the name later
        component={AddPostScreen} 
        options={{
        tabBarIcon: ({color}) => (
            <Icon name="add-circle" size={30} color={'blueviolet'} />
        ),
        }}
      />
      <Tab.Screen
        name={'Explore'} // we can change the name later
        component={ExploreScreen} 
        options={{
        tabBarIcon: ({color}) => (
            <Icon name="person-search" size={25} color={color} />
        ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default bottomTabHandler;
