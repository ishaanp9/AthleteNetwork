import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    width: '100%',
    height: '30%' ,
  },
  image: {
    top: 30,
    resizeMode: 'contain',
    width: '100%',
    height: '90%',
    position: 'absolute',
  },
  bottomContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'blueviolet',
    marginRight: '60%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'blueviolet',
    marginLeft: '10%',
    marginBottom: 5,
    
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blueviolet',
    borderRadius: 10,
    padding: 5,
    width: '87%',
  },
  button: {
    backgroundColor: 'blueviolet',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '10%',
  },
  authRow: {
    flexDirection: 'row',
    
  },
  authButton: {
    borderWidth: 0.8,
    borderColor: 'blueviolet',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginHorizontal: '5%',
  },
  logos: {
    width: 30,
    height: 30,
  },
});

export default styles;
