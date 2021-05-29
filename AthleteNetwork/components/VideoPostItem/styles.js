
import {StyleSheet, Dimensions, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  video: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    // resizeMode: 'cover',
  }
});

export default styles;