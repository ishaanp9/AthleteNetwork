import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 1.5,
    //height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  rightContainer: {
    ...Platform.select({
      ios: {
        zIndex: 10
      },
      android: {
        elevation: 10
      },
      default: {
        zIndex: 10
      }
    }),
    alignSelf: 'flex-end',
    height: Dimensions.get('window').height / 2.25,
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 14,
    fontWeight: '400',
  },
  textContainer: {
    marginTop: Dimensions.get('window').height / 1.5,
    width: '100%',
  },
  usernameText: {
    ...Platform.select({
      ios: {
        zIndex: 10
      },
      android: {
        elevation: 10
      },
      default: {
        zIndex: 10
      }
    }),
    fontSize: 24,
    paddingTop: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  descriptionText: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 80,
    fontSize: 15,
  },
  textExpand: {
    paddingLeft: 10,
    color: '#808080',
  },
  postTimeText: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 12,
    color: '#808080',
  },
  
});

export default styles;
