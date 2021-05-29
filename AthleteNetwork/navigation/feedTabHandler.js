import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PublicFeedList from '../screens/PublicFeedList';
import PrivateFeedList from '../screens/PrivateFeedList';
import ChatScreen from '../screens/ChatScreen';
import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const feedTabHandler = () => {

    return (
        <Tab.Navigator 
            initialRouteName={'Public Feed'} 
            tabBarOptions={{
                indicatorStyle: {
                  backgroundColor: null,
                },
                style: {
                  backgroundColor: 'transparent',
                  borderTopWidth: 0,
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 30,
                  height: 50,
                }
              }}
        >
            <Tab.Screen name="Public Feed" component={PublicFeedList} />
            <Tab.Screen name="Private Feed" component={PrivateFeedList} />
            <Tab.Screen name="Chat Screen" component={ChatScreen}/>
        </Tab.Navigator>
        
    )
}

export default feedTabHandler;