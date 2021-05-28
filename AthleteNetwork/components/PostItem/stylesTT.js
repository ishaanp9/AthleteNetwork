import {StyleSheet, Dimensions, Platform} from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: '100%',
    //height: Dimensions.get('window').height / 1.5,
    height: '100%',
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
  },
  messageContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 50,
  },
  iconHolder: {
    alignSelf: 'flex-end',
    height: Dimensions.get('window').height / 2.5,
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 2.5
  },
  iconContainer: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 14,
    fontWeight: '400',
  },
  textContainer: {
    //marginTop: Dimensions.get('window').height / 1.5,
    height: Dimensions.get('window').height - 100,
    justifyContent: 'flex-end',
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
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  descContainer: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 80,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  textExpand: {
    paddingLeft: 15,
    color: '#808080',
  },
  postTimeText: {
    paddingTop: 10,
    paddingLeft: 15,
    fontSize: 12,
    color: '#808080',
  },
  
  
});

export default styles;
