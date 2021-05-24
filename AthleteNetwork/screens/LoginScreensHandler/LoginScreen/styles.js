import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  iconContainer: {
      alignItems: 'center',
  },
  imgBackground: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inputText: {
      width: Dimensions.get('window').width - 50,
      borderRadius: 25,
      height: Dimensions.get('window').height / 20,
      borderWidth: 1,
      fontSize: 20,
      marginHorizontal: 25,
      paddingLeft: 20,
      backgroundColor: '#FFEFFF',
  },
  firstInputContainer: {
    marginTop: Dimensions.get('window').height / 2 + 50,
  },
  secondInputContainer: {
    marginTop: 15,
},
  loginButton: {
    width: Dimensions.get('window').width - 50,
    borderRadius: 25,
    height: Dimensions.get('window').height / 20,
    borderWidth: 1,
    marginHorizontal: 25,
    backgroundColor: '#E0BBE4',
    marginTop: 20,
    justifyContent: 'center',
  },
  btnText: {
      fontSize: 16,
      textAlign: 'center',
  },
  newAcc: {
      marginTop: 20,
  },
  newAccText: {
      color: 'blue',
      fontStyle: 'italic',
      textDecorationLine: 'underline',
      fontSize: 15,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: 'white',
  }
});

export default styles;
