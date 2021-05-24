import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  topContainer: {
      backgroundColor: 'lightgrey',
      width: '100%',
      height: '60%',
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'flex-end',
  },
  headerText:{
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  imageContainer: {
      width: '80%',
      height: '80%',
      resizeMode: 'cover',
  },
  bottomContainer: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
  },
  title:{
      fontWeight: 'bold',
      fontSize: 16,
  },
  button: {
    width: '80%',
    height: '20%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
      fontSize: 14,
      fontWeight: 'bold',
  },
});

export default styles;
