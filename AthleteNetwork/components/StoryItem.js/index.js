import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

const StoryItem = props => {
  return (
    <View style={{marginHorizontal: 15}}>
      <Avatar
        rounded
        source={{
          uri: props.url,
        }}
        size="medium"
      />
      <Text style={{fontWeight: 'bold', marginTop: 5}}>{props.name}</Text>
    </View>
  );
};

export default StoryItem;
