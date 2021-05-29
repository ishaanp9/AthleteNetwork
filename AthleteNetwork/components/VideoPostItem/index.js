import React, {useState} from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import styles from './styles';
import Video from 'react-native-video';

const VideoPostItem = () => {
  const [paused, setPaused] = useState(false);
  const [mute, setMute] = useState(false);

  const onMutePress = () => {
    setMute(!mute);
  };
  const onPausedPress = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPausedPress} style={styles.container}>
        <Video
          style={styles.video}
          source={require('../../assets/videos/fencing.mp4')}
          //source={{uri: 'https://v19-us.tiktokcdn.com/9ef770594a1ce3f47b5a42a59385b235/60b2e5a6/video/tos/useast2a/tos-useast2a-ve-0068c001/f0d5b54b914e4e038c89c92946137f85/?a=1233&br=1350&bt=675&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202105291908140101890482102098FD14&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amtvPDhtcWV4MzMzaDczM0ApNDhpaDY1NDw1N2Q1N2ZoOmdwNGVicTYta3NgLS01MTZzcy1hYzZeNjAwYDReMzJhMS06Yw%3D%3D&vl=&vr='}}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
          //fullscreen={true}
          //mute={mute}
        />
      </Pressable>
    </View>
  );
};

export default VideoPostItem;
