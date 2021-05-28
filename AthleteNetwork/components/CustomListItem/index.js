import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = (props) => {
  return (
    <ListItem>
      <Avatar
        rounded
        // I need to unhard code it below
        //containerStyle={{width: 50, height: 50,}}
        source={{
          uri: props.url,
        }}
        size='medium'
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: 'bold' }}>
          {props.name}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Yo you suck at sports lmao. Go get a real job at mcdonalds or smth. My brother works there he can give u a referal lmao.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
