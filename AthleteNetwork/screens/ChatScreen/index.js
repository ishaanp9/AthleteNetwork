import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Avatar, SearchBar} from 'react-native-elements';
import CustomListItem from '../../components/CustomListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StoryItem from '../../components/StoryItem.js';

const ChatScreen = ({navigation}) => {
  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       title: 'Chats',
  //       headerStyle: {backgroundColor: 'white'},
  //       headerTitleStyle: {color: 'black'},
  //       headerTintColor: 'black',
  //     });
  //   }, []);
  return (
    <SafeAreaView>
      {/* <View>
        <SearchBar 
          placeholder="Search"
          lightTheme
          round
          containerStyle={{alignItems:'center', justifyContent: 'center', backgroundColor: 'white', width: '100%', height: '5%'}}
          inputContainerStyle={{width: '80%', height: '10%',alignItems:'center'}}
          
          />
      </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            height: '7%',
          }}>
          <Text style={{fontSize: 30, color: 'blueviolet', fontWeight: 'bold'}}>
            Messages
          </Text>
          <Icon name="add" size={25} color="blueviolet" />
        </View>
        {/* <View>
          <SearchBar
            placeholder="Search"
            lightTheme
            round
            containerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              width: '100%',
              height: '5%',
            }}
            inputContainerStyle={{
              width: '80%',
              height: '10%',
              alignItems: 'center',
            }}
          />
        </View> */}
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          Stories
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 15,
            marginBottom: 20,
          }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: 'row',
            }}>
            <StoryItem
              url="https://media-exp1.licdn.com/dms/image/C4E03AQENXJqjJh7Sdw/profile-displayphoto-shrink_400_400/0/1563388265226?e=1627516800&v=beta&t=13kfT_JpjTtmI3dISpj2gGMijGKgaj72F79nC2zx2vg"
              name="Spencer"
            />
            <StoryItem
              url="https://media-exp1.licdn.com/dms/image/C4E03AQENXJqjJh7Sdw/profile-displayphoto-shrink_400_400/0/1563388265226?e=1627516800&v=beta&t=13kfT_JpjTtmI3dISpj2gGMijGKgaj72F79nC2zx2vg"
              name="Spencer"
            />
            <StoryItem
              url="https://media-exp1.licdn.com/dms/image/C4E03AQENXJqjJh7Sdw/profile-displayphoto-shrink_400_400/0/1563388265226?e=1627516800&v=beta&t=13kfT_JpjTtmI3dISpj2gGMijGKgaj72F79nC2zx2vg"
              name="Spencer"
            />
            <StoryItem
              url="https://media-exp1.licdn.com/dms/image/C4E03AQENXJqjJh7Sdw/profile-displayphoto-shrink_400_400/0/1563388265226?e=1627516800&v=beta&t=13kfT_JpjTtmI3dISpj2gGMijGKgaj72F79nC2zx2vg"
              name="Spencer"
            />
            <StoryItem
              url="https://media-exp1.licdn.com/dms/image/C4E03AQENXJqjJh7Sdw/profile-displayphoto-shrink_400_400/0/1563388265226?e=1627516800&v=beta&t=13kfT_JpjTtmI3dISpj2gGMijGKgaj72F79nC2zx2vg"
              name="Spencer"
            />
            <StoryItem
              url="https://media-exp1.licdn.com/dms/image/C4E03AQENXJqjJh7Sdw/profile-displayphoto-shrink_400_400/0/1563388265226?e=1627516800&v=beta&t=13kfT_JpjTtmI3dISpj2gGMijGKgaj72F79nC2zx2vg"
              name="Spencer"
            />
          </ScrollView>
        </View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          Messages
        </Text>
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5603AQHmHWneqsT_UQ/profile-displayphoto-shrink_400_400/0/1620619068445?e=1627516800&v=beta&t=FkfTBmSAZJX8RrklAK5byBeBQ2yCdigbbV8-VaA7PSM"
          name="Ishaan Puri"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C4D03AQE43J7qGvqX_w/profile-displayphoto-shrink_400_400/0/1619116118692?e=1627516800&v=beta&t=zo9Y1LW60CyuAdC4W9_AZcBzB35_md-oMLpJNS4RtQ0"
          name="Ethan Kam"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5103AQElLUw2NPBQRA/profile-displayphoto-shrink_400_400/0/1517426439936?e=1627516800&v=beta&t=UTiRCtVpWAMHBctIwZlWtKHq3fG5GtJEVzbaoRjRu3g"
          name="Mark Cuban"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5603AQG_uMsyWgyOWQ/profile-displayphoto-shrink_800_800/0/1559324832944?e=1627516800&v=beta&t=M2g7Ti1rpDyQgUTpbAxL7Og38WG_px7KiRUQMzAvaGQ"
          name="Pete Carroll"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_400_400/0/1579726624860?e=1627516800&v=beta&t=G6RZ0xEYo6Vdl3T43M61Nkc4XqJpYCVX8r10oIgH6to"
          name="Satya Nadella"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5603AQHvmKhoI4h4NQ/profile-displayphoto-shrink_400_400/0/1607103848857?e=1627516800&v=beta&t=konpBUIjNFNYSymac6_H4-eH6FE19maOF0JGkPzlt6Q"
          name="Bilal Elmohandes"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5603AQHmHWneqsT_UQ/profile-displayphoto-shrink_400_400/0/1620619068445?e=1627516800&v=beta&t=FkfTBmSAZJX8RrklAK5byBeBQ2yCdigbbV8-VaA7PSM"
          name="Ishaan Puri"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C4D03AQE43J7qGvqX_w/profile-displayphoto-shrink_400_400/0/1619116118692?e=1627516800&v=beta&t=zo9Y1LW60CyuAdC4W9_AZcBzB35_md-oMLpJNS4RtQ0"
          name="Ethan Kam"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5103AQElLUw2NPBQRA/profile-displayphoto-shrink_400_400/0/1517426439936?e=1627516800&v=beta&t=UTiRCtVpWAMHBctIwZlWtKHq3fG5GtJEVzbaoRjRu3g"
          name="Mark Cuban"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5603AQG_uMsyWgyOWQ/profile-displayphoto-shrink_800_800/0/1559324832944?e=1627516800&v=beta&t=M2g7Ti1rpDyQgUTpbAxL7Og38WG_px7KiRUQMzAvaGQ"
          name="Pete Carroll"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_400_400/0/1579726624860?e=1627516800&v=beta&t=G6RZ0xEYo6Vdl3T43M61Nkc4XqJpYCVX8r10oIgH6to"
          name="Satya Nadella"
        />
        <CustomListItem
          url="https://media-exp1.licdn.com/dms/image/C5603AQHvmKhoI4h4NQ/profile-displayphoto-shrink_400_400/0/1607103848857?e=1627516800&v=beta&t=konpBUIjNFNYSymac6_H4-eH6FE19maOF0JGkPzlt6Q"
          name="Bilal Elmohandes"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
